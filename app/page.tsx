import {
   queryWrapper,
   CUSTOMER_LARGEST_UPLOADS,
   MONTHLY_UPLOAD_ACTIVITY,
   LARGEST_UPLOADS,
   SITE_ACTIVITY,
   getDroneCardData,
} from "@/lib/queries";
import { customerLargestUploadsColumns } from "@/components/table/columns";
import { Table } from "@/components/table/table";
import {
   CustomerLargestUploads,
   LargestUploads,
   SiteActivity,
   DroneCardData,
} from "@/lib/definitions";
import { GraphMonthlyActivity } from "@/components/graph-monthly-activity";
import { DashboardCards } from "@/components/dashboard-cards";

export default async function Home() {
   // Drone Cards

   const droneCardData = (await getDroneCardData()) as DroneCardData[];

   // Upload Cards

   const largestUploads = (await queryWrapper({
      stmt: LARGEST_UPLOADS,
   })) as LargestUploads[];
   const siteActivity = (await queryWrapper({
      stmt: SITE_ACTIVITY,
      limit: 1,
   }).then((data: any) =>
      data.map((d: any) => ({
         ...d,
         site_count: Number(d.site_count),
         total_size: Number(d.total_size),
      }))
   )) as SiteActivity[];

   // Card Data

   const cardData = {
      largestUploads,
      siteActivity: siteActivity[0],
      droneCardData,
   };

   // Customer Table

   const customerLargestUploads = (await queryWrapper({
      stmt: CUSTOMER_LARGEST_UPLOADS,
   })) as CustomerLargestUploads[];

   // Line Chart

   const monthlyUploadActivity = await queryWrapper({
      stmt: MONTHLY_UPLOAD_ACTIVITY,
   }).then((data: any) =>
      data.map((d: any) => ({
         ...d,
         month: getMonthFromNumber(Number(d.month)),
         Uploads: Number(d.Uploads),
      }))
   );

   return (
      // <main className="relative flex overflow-hidden">
      <main className="flex flex-col flex-1">
         <div className="relative flex overflow-hidden">
            <div className="flex flex-col flex-1 gap-2 p-4">
               <DashboardCards data={JSON.stringify(cardData)} />
               <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                  <Table
                     initalColumns={customerLargestUploadsColumns}
                     initialData={customerLargestUploads}
                  />
                  <GraphMonthlyActivity
                     data={JSON.stringify(monthlyUploadActivity)}
                  />
               </div>
            </div>
         </div>
      </main>
   );
}

const getMonthFromNumber = (month: number) => {
   const dateObj = new Date(0, month - 1);
   return dateObj.toLocaleString("default", {
      month: "short",
   });
};
