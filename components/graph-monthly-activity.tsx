"use client";
import * as React from "react";
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
} from "@/components/ui/card";
import {
   Line,
   LineChart,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
} from "recharts";
import { RecentCustomerActivity } from "@/lib/definitions";

const getShortMonthYear = (date: string) => {
   const dateObj = new Date(date);
   return dateObj.toLocaleString("default", {
      month: "short",
      year: "numeric",
   });
};

export const GraphMonthlyActivity = ({
   data,
}: {
data: string;
}) => {
   const primaryColor = "#facc15";
   const secondaryColor = "#3d6a94";
   const textColor = "#fafaf9";

   return (
      <Card className="w-full h-96 flex flex-col">
         <CardHeader>
            <CardTitle>Monthly Upload Activity</CardTitle>
         </CardHeader>
         <CardContent className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart
                  data={JSON.parse(data)}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
               >
                  <XAxis
                     dataKey="month"
                     axisLine={false}
                     padding={{ left: 5, right: 5 }}
                     tickLine={false}
                     stroke={textColor}
                  />
                  <YAxis
                     yAxisId="left"
                     dataKey="Size"
                     type="number"
                     stroke={textColor}
                     orientation="left"
                     axisLine={false}
                     tickLine={false}
                     domain={["auto", "auto"]}
                     tick={false}
                  />
                  <YAxis
                     yAxisId="right"
                     dataKey="Uploads"
                     type="number"
                     stroke={textColor}
                     orientation="right"
                     axisLine={false}
                     tickLine={false}
                     domain={["auto", "auto"]}
                     tick={false}
                  />
                  <Tooltip
                     cursor={false}
                     contentStyle={{
                        backgroundColor: "bg-transparent",
                        border: "none",
                        color: textColor,
                     }}
                     itemStyle={{
                        color: textColor,
                     }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Line
                     type="monotone"
                     dataKey="Size"
                     stroke={primaryColor}
                     yAxisId="left"
                     activeDot={false}
                     dot={false}
                  />
                  <Line
                     type="monotone"
                     dataKey="Uploads"
                     stroke={secondaryColor}
                     yAxisId="right"
                     activeDot={false}
                     dot={false}
                  />
               </LineChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
   );
};
