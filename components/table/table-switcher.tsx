import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { PropellerTable, } from '@/lib/definitions';
import { cn } from '@/lib/utils';

// export const TableSwitcher = ({ handleTableChange, table, className }: {
//     handleTableChange: (table: PropellerTable) => void,
//     table: PropellerTable,
//     className?: string
// }) => {
//     return (
//         //@ts-ignore
//         <Tabs value={table} onValueChange={handleTableChange} className={cn(
//             '',
//             className
//         )}>
//             <TabsList className="flex space-x-4 text-xs bg-transparent">
//                 <TabsTrigger value="customerLargestUploads">Largest Uploads</TabsTrigger>
//                 <TabsTrigger value="customersWithMultipleDrones">Multiple Drones</TabsTrigger>
//                 <TabsTrigger value="customerDronePreference">Drone Preference</TabsTrigger>
//                 <TabsTrigger value="recentCustomerActivity">Recent Activity</TabsTrigger>
//             </TabsList>
//         </Tabs>
//     )
// }

const tableOptions = [
    { value: "customerLargestUploads", label: "Largest Uploads" },
    { value: "customersWithMultipleDrones", label: "Multiple Drones" },
    { value: "customerDronePreference", label: "Drone Preference" },
    { value: "recentCustomerActivity", label: "Recent Activity" }
]

const getLabel = (value: PropellerTable) => tableOptions.find(option => option.value === value)?.label

export const TableSwitcher = ({ handleTableChange, table, className }: {
    handleTableChange: (table: PropellerTable) => void,
    table: PropellerTable,
    className?: string
}) => {
    return (
        <Select
            value={table}
            onValueChange={handleTableChange}
            
        >
            <SelectTrigger className={cn(
                "",
                className
            
            )}>
                <SelectValue>{getLabel(table)}</SelectValue>
            </SelectTrigger>
            <SelectContent
            className={cn(
                "",
                className
            )}
            >
                {tableOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}