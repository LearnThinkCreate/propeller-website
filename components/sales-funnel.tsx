"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
   Bar,
   BarChart,
   ReferenceLine,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Funnel,
   FunnelChart,
   LabelList
} from "recharts";
import { cn } from "@/lib/utils";

export const SalesFunnel = ({
   data,
   className,
}: {
   data: string;
   className?: string;
}) => {
   const primaryColor = "#facc15";
   const secondaryColor = "#3d6a94";
   const textColor = "#fafaf9";

   return (
      <Card className="flex-1 w-full flex flex-col min-h-96">
         <CardHeader>
            <CardTitle>Monthly Upload Activity</CardTitle>
         </CardHeader>
         <CardContent className="flex-1">
            <ResponsiveContainer width="100%" height="100%" minHeight={500}>
               <FunnelChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
               >
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
                  position={{ x: 0, y: -20 }}
                  formatter={((value, name, props) => [value, STAGES[name as number]])}
                  separator=" -  "
                  />
                  <Funnel
                     data={JSON.parse(data)}
                     dataKey="count"
                     isAnimationActive
                     
                  >
                    <LabelList 
                    position="center" 
                  fill={primaryColor}
                    dataKey="stage" 
                    />
                  </Funnel>
               </FunnelChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
   );
};


const STAGES = [
   'Lead',
   'Prospect',
   'Qualified',
   'Closed'
]