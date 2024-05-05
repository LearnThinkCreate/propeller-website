import "server-only";

import prisma from "@/lib/prisma";

interface QueryWrapperParams {
   stmt: string;
   limit?: number;
   offset?: number;
}

export const queryWrapper = async ({
   stmt,
   limit,
   offset,
}: QueryWrapperParams) => {
   return await prisma.$queryRawUnsafe(`
      ${stmt}
      ${limit ? `LIMIT ${limit}` : ""}
      ${offset ? `OFFSET ${offset}` : ""}
   `);
};

export const CUSTOMER_LARGEST_UPLOADS = `
SELECT
   first_name || ' ' || last_name as customer_name,
   CASE
      WHEN MAX(uploads.total_size) IS NULL THEN 0
      ELSE MAX(uploads.total_size)
   END as largest_upload,
   uploads.upload_date,
   products.drone_model
FROM 
   customers
LEFT JOIN
   uploads ON customers.customer_id = uploads.customer_id
LEFT JOIN
   products ON uploads.product_id = products.product_id
GROUP BY
   customers.customer_id,
   customer_name,
   uploads.upload_date,
   products.drone_model
ORDER BY
   largest_upload DESC
`;

export const DRONE_UPLOAD_SIZE = `
SELECT
   products.product_id,
   drone_model,
   SUM(uploads.total_size) as total_size
FROM
   products
LEFT JOIN
   uploads ON products.product_id = uploads.product_id
GROUP BY
   products.product_id,
   drone_model
ORDER BY
   total_size DESC
`;

export const CUSTOMERS_MULTIPLE_DRONE = `
select
   first_name || ' ' || last_name as customer_name,
   COUNT(DISTINCT uploads.product_id) as num_drones
from
   customers
LEFT JOIN
   uploads ON customers.customer_id = uploads.customer_id
GROUP BY
   customers.customer_id,
   customer_name
HAVING
   COUNT(DISTINCT uploads.product_id) > 1
ORDER BY
   num_drones DESC, customers.customer_id DESC
`;

export const MONTHLY_UPLOAD_ACTIVITY = `
SELECT 
   TO_CHAR(upload_date, 'YYYY-MM') AS month,
   COUNT(*) AS total_uploads,
   SUM(total_size) AS total_size
FROM
   uploads
GROUP BY
   month
ORDER BY
   month
`;

export const LARGEST_UPLOADS = `
SELECT
   uploads.upload_id,
   customers.customer_id,
   first_name || ' ' || last_name as customer_name,
   products.product_id,
   drone_model,
   total_size
FROM
   uploads
LEFT JOIN
   customers ON uploads.customer_id = customers.customer_id
LEFT JOIN
   products ON uploads.product_id = products.product_id
ORDER BY
   total_size DESC
LIMIT 3
`;

export const SITE_ACTIVITY = `
SELECT
   uploads.upload_id,
   count(distinct site_id) as site_count
FROM
   uploads
LEFT JOIN
   sites ON uploads.upload_id = sites.upload_id
GROUP BY
   uploads.upload_id
ORDER BY
   site_count desc
`;

export const CUSTOMER_DRONE_PREFERENCE = `
With CustomerDronePreference AS (
   SELECT
      customers.customer_id,
      first_name || ' ' || last_name as customer_name,
      products.product_id,
      drone_model,
      COUNT(uploads.product_id) as num_uploads,
      ROW_NUMBER() OVER(PARTITION BY customers.customer_id ORDER BY COUNT(uploads.product_id) DESC) as rn
   FROM
      customers
   LEFT JOIN
      uploads ON customers.customer_id = uploads.customer_id
   LEFT JOIN
      products ON uploads.product_id = products.product_id
   GROUP BY
      customers.customer_id,
      customer_name,
      products.product_id,
      drone_model
)
SELECT
   customer_name,
   drone_model,
   num_uploads
FROM
   CustomerDronePreference
WHERE
   rn = 1
ORDER BY
   num_uploads DESC
`;

export const UPLOADS_BY_MODEL = `
WITH TotalUploads AS (
   SELECT
      COUNT(*) as total_uploads
   FROM
      uploads
), UploadsByModel AS (
   SELECT
      products.product_id,
      drone_model,
      COUNT(*) as num_uploads
   FROM
      products
   LEFT JOIN
      uploads ON products.product_id = uploads.product_id
   GROUP BY
      products.product_id,
      drone_model
)
SELECT
   drone_model,
   ROUND((num_uploads * 100.0 / (SELECT total_uploads FROM TotalUploads))) as percentage_of_total_uploads,    (SELECT total_uploads FROM TotalUploads) as total_uploads
FROM
   UploadsByModel
ORDER BY
   percentage_of_total_uploads DESC
`;

export const RECENT_CUSTOMER_ACTIVITY = `
SELECT
   first_name || ' ' || last_name as customer_name,
   products.drone_model,
   MAX(upload_date) as last_upload_date
FROM
   customers
LEFT JOIN   
   uploads ON customers.customer_id = uploads.customer_id
LEFT JOIN
   products ON uploads.product_id = products.product_id
WHERE
   upload_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY
   customers.customer_id,
   customer_name,
   products.drone_model
ORDER BY
   last_upload_date DESC
`;

export const getRecentCustomerActivity = async (days: number) =>
   queryWrapper({
      stmt: `
      SELECT
   first_name || ' ' || last_name as customer_name,
   products.drone_model,
   MAX(upload_date) as last_upload_date
   FROM
      customers
   LEFT JOIN   
      uploads ON customers.customer_id = uploads.customer_id
   LEFT JOIN
      products ON uploads.product_id = products.product_id
   WHERE
      upload_date >= CURRENT_DATE - INTERVAL '${days} days'
   GROUP BY
      customers.customer_id,
      customer_name,
      products.drone_model
   ORDER BY
      last_upload_date DESC
   `,
   });
