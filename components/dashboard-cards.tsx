import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { 
    LargestUploads,
    SiteActivity,
    DroneCardData
  } from "@/lib/definitions";
import { cn } from "@/lib/utils";

export const DashboardCards = ({
    data
}: {
    data: string
})  => {
    const {
        droneCardData,
        largestUploads,
        siteActivity
    }: {
        droneCardData: DroneCardData[];
        largestUploads: LargestUploads[];
        siteActivity: SiteActivity;
    } = JSON.parse(data);

    return (
        <div className={cn(
            "w-full grid grid-cols-1 lg:grid-cols-3 gap-4"
        )}>
            <Card className="flex flex-col">
                <CardHeader className="p-0 px-6 pt-6 pb-4">
                    <CardTitle>Drone Upload Metrics</CardTitle>
                    <CardDescription>Upload Size & Share per Drone Model</CardDescription>
                </CardHeader>
                <CardContent className="grow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Model</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Upload Share</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {droneCardData.map(({ drone_model, total_size, percentage_of_total_uploads }) => (
                                <TableRow key={drone_model}>
                                    <TableCell>{drone_model}</TableCell>
                                    <TableCell>{total_size}</TableCell>
                                    <TableCell>{percentage_of_total_uploads}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="flex flex-col">
                <CardHeader className="p-0 px-6 pt-6 pb-4">
                    <CardTitle>Largest Customer Uploads</CardTitle>
                    <CardDescription>3 Largest Customer Uploads</CardDescription>
                </CardHeader>
                <CardContent className="grow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Model</TableHead>
                                {/* <TableHead>Upload Date</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {largestUploads.map(({ customer_name, total_size, drone_model, upload_date }) => (
                                <TableRow key={customer_name}>
                                    <TableCell>{customer_name}</TableCell>
                                    <TableCell>{total_size}</TableCell>
                                    <TableCell>{drone_model}</TableCell>
                                    {/* <TableCell>{new Date(upload_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card> 


            <Card className="flex flex-col">
                <CardHeader className="p-0 px-6 pt-6 pb-4">
                    <CardTitle>Site Activity</CardTitle>
                    <CardDescription>Customer Upload with highest number of sites</CardDescription>
                </CardHeader>
                <CardContent className="grow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Sites</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Model</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>{siteActivity.customer_name}</TableCell>
                                <TableCell>{siteActivity.site_count}</TableCell>
                                <TableCell>{siteActivity.total_size}</TableCell>
                                <TableCell>{siteActivity.drone_model}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}