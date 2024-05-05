import { NextResponse } from "next/server";
import {
   queryWrapper,
   CUSTOMER_LARGEST_UPLOADS,
   CUSTOMERS_MULTIPLE_DRONE,
   CUSTOMER_DRONE_PREFERENCE,
   getRecentCustomerActivity,
} from "@/lib/queries";
import {
   CustomerLargestUploads,
   CustomersWithMultipleDrones,
   CustomerDronePreference,
   RecentCustomerActivity,
   propellerTableArray,
} from "@/lib/definitions";
export async function generateStaticParams() {
   return propellerTableArray.map((propellerTable) => ({
      name: propellerTable,
   }));
}

export async function GET(
   request: Request,
   { params }: { params: { name: string } }
) {
   console.log("Executing table-data route");
   console.log("Params:", params);
   const table = params.name;
   const { searchParams } = new URL(request.url);
   const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : 5;
   const offset = searchParams.get("offset")
      ? parseInt(searchParams.get("offset")!)
      : 0;
   const days = searchParams.get("days")
      ? parseInt(searchParams.get("days")!)
      : 30;
   console.log(params);

   if (table === "customerLargestUploads") {
      const customerLargestUploads = (await queryWrapper({
         stmt: CUSTOMER_LARGEST_UPLOADS,
      })) as CustomerLargestUploads[];

      return NextResponse.json({
         data: customerLargestUploads
        //  .slice(offset, offset + limit),
      });
   }

   if (table === "customersWithMultipleDrones") {
      const customersWithMultipleDrones = (await queryWrapper({
         stmt: CUSTOMERS_MULTIPLE_DRONE,
      })) as CustomersWithMultipleDrones[];
      return NextResponse.json({
         data: customersWithMultipleDrones
            // .slice(offset, offset + limit)
            .map((customer) => ({
               ...customer,
               num_drones: Number(customer.num_drones),
            })),
      });
   }

   if (table === "customerDronePreference") {
      const customerDronePreference = (await queryWrapper({
         stmt: CUSTOMER_DRONE_PREFERENCE,
      })) as CustomerDronePreference[];
      return NextResponse.json({
         data: customerDronePreference
            // .slice(offset, offset + limit)
            .map((customer) => ({
               ...customer,
               num_uploads: Number(customer.num_uploads),
            })),
      });
   }

   if (table === "recentCustomerActivity") {
      const recentCustomerActivity = (await getRecentCustomerActivity(
         days
      )) as RecentCustomerActivity[];
      return NextResponse.json({
         data: recentCustomerActivity.slice(offset, offset + limit),
      });
   }

   return NextResponse.json({ error: "Table not found" });
}
