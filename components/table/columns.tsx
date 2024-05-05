"use client";

import { ColumnDef, Row, Header, Column } from "@tanstack/react-table";
import {
   CustomerLargestUploads,
   CustomersWithMultipleDrones,
   CustomerDronePreference,
   RecentCustomerActivity,
   PropellerTable,
} from "@/lib/definitions";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const sortableHeader = ({
   column,
   columnName,
   className,
}: {
   column: Column<any>;
   columnName: string;
   className?: string;
}) => {
   column.getToggleSortingHandler;
   return (
      <Button
         variant="ghost"
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         className={className}
      >
         {columnName}
         <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
   );
};

export const customerLargestUploadsColumns: ColumnDef<CustomerLargestUploads>[] =
   [
      {
         header: "Customer Name",
         accessorKey: "customer_name",
      },
      {
         header: ({ column }) => {
            return sortableHeader({ column, columnName: "Largest Upload" });
         },
         accessorKey: "largest_upload",
      },
      {
         header: "Drone Model",
         accessorKey: "drone_model",
      },
      {
         enableSorting: true,
         header: ({ column }) => {
            return sortableHeader({ column, columnName: "Upload Date" });
         },
         accessorKey: "upload_date",
         cell: ({ row }) => {
            if (row.original.upload_date === null) return null;

            const dateObj = new Date(row.getValue("upload_date"));
            const cleanDate = new Intl.DateTimeFormat("en-US", {
               month: "long",
               day: "numeric",
            }).format(dateObj);

            return <div className="">{cleanDate}</div>;
         },
      },
   ];

export const customersWithMultipleDronesColumns: ColumnDef<CustomersWithMultipleDrones>[] =
   [
      {
         header: "Customer Name",
         accessorKey: "customer_name",
      },
      {
         header: ({ column }) => {
            return sortableHeader({ column, columnName: "Number of Drones" });
         },
         accessorKey: "num_drones",
      },
   ];

export const customerDronePreferenceColumns: ColumnDef<CustomerDronePreference>[] =
   [
      {
         header: "Customer Name",
         accessorKey: "customer_name",
      },
      {
         header: "Drone Model",
         accessorKey: "drone_model",
      },
      {
         //  header: "Number of Uploads",
         header: ({ column }) => {
            return sortableHeader({ column, columnName: "Number of Uploads" });
         },
         accessorKey: "num_uploads",
      },
   ];

export const recentCustomerActivityColumns: ColumnDef<RecentCustomerActivity>[] =
   [
      {
         header: "Customer Name",
         accessorKey: "customer_name",
      },
      {
         header: "Drone Model",
         accessorKey: "drone_model",
      },
      {
         header: ({ column }) => {
            return sortableHeader({ column, columnName: "Last Upload Date" });
         },
         accessorKey: "last_upload_date",
         cell: ({ row }) => {
            if (row.original.last_upload_date === null) return null;

            const dateObj = new Date(row.getValue("last_upload_date"));
            const cleanDate = new Intl.DateTimeFormat("en-US", {
               month: "long",
               day: "numeric",
            }).format(dateObj);

            return <div className="">{cleanDate}</div>;
         },
      },
   ];

export const getTableColumns = (table: PropellerTable) => {
   switch (table) {
      case "customerLargestUploads":
         return customerLargestUploadsColumns;
      case "customersWithMultipleDrones":
         return customersWithMultipleDronesColumns;
      case "customerDronePreference":
         return customerDronePreferenceColumns;
      case "recentCustomerActivity":
         return recentCustomerActivityColumns;
   }
};
