"use client";
import * as React from "react";
import { DataTable } from "@/components/table/data-table";
import {
   CustomerLargestUploads,
   PropellerTable,
   PropellerTableColumn,
} from "@/lib/definitions";
import {
   customerLargestUploadsColumns,
   getTableColumns,
} from "@/components/table/columns";
import { ColumnDef } from "@tanstack/react-table";
import { TableSwitcher } from "@/components/table/table-switcher";
import { cn } from "@/lib/utils";
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
} from "@/components/ui/card";
import { Car } from "lucide-react";

export function Table({
   initialData,
   initalColumns,
   className,
}: {
   initialData: CustomerLargestUploads[];
   initalColumns: ColumnDef<CustomerLargestUploads>[];
   className?: string;
}) {
   const [data, setData] =
      React.useState<CustomerLargestUploads[]>(initialData);
   const [columns, setColumns] =
      React.useState<ColumnDef<any>[]>(initalColumns);
   const [table, setTable] = React.useState<PropellerTable>(
      "customerLargestUploads"
   );
   const [mounted, setMounted] = React.useState(false);

   const handleTableChange = (table: PropellerTable) => {
      setTable(table);
      // console.log(table)
   };

   React.useEffect(() => {
      if (!mounted) {
         setMounted(true);
         return;
      }

      let ignore = false;
      if (!ignore) {
         const fetchData = async () => {
            const response = await fetch(`/api/table-data/${table}`);
            const json = await response.json();
            if (!ignore) {
               setData(json.data);
               setColumns(getTableColumns(table));
            }
         };
         fetchData();
      }
      return () => {
         ignore = true;
      };
   }, [table]);

   return (
      <div
         className={cn(
            "flex flex-col items-center justify-center w-full brorder",
            className
         )}
      >
         <Card className="grow flex flex-col w-full">
            <CardHeader className="p-0 pt-6 px-6">
               <CardTitle>Customer Data</CardTitle>
            </CardHeader>
            <CardContent>
               <DataTable
                  data={data}
                  columns={columns}
                  className="w-full"
                  handleTableChange={handleTableChange}
                  propellerTable={table}
               />
            </CardContent>
         </Card>
      </div>
   );
}
