import prisma from "@/lib/prisma";
import { SalesFunnel } from "@/components/sales-funnel";
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
} from "@/components/ui/card";
import { cn } from '@/lib/utils'

export default async function Page() {
   const leadCount = await prisma.leads.count();
   const prospectCount = await getStageCount(1);
   const qualifiedCount = await getStageCount(2);
   const closedCount = await getStageCount(3);

   const leadDropoffRate = (
      ((leadCount - prospectCount) / leadCount) *
      100
   ).toFixed(0);
   const prospectDropoffRate = (
      ((prospectCount - qualifiedCount) / prospectCount) *
      100
   ).toFixed(0);
   const qualifiedDropoffRate = (
      ((qualifiedCount - closedCount) / qualifiedCount) *
      100
   ).toFixed(0);
   const closedDropoffRate = 0;

   const funnelData = [
      {
         stage: "Lead",
         label: "Leads",
         count: leadCount,
         dropoffRate: leadDropoffRate,
         fill: "#c8af4be5",
         content:
            "Leads are the first stage in the sales funnel. They are potential customers who have shown interest in your product or service. The goal is to move them to the next stage of the funnel.",
      },
      {
         stage: "Prospect",
         label: "Prospects",
         count: prospectCount,
         dropoffRate: prospectDropoffRate,
         fill: "#89a832",
         content:
            "Prospects are leads who have shown interest in your product or service and are likely to become customers. The goal is to move them to the next stage of the funnel.",
      },
      {
         stage: "Qualified",
         label: "Qualified",
         count: qualifiedCount,
         dropoffRate: qualifiedDropoffRate,
         // pick a new cool color
         fill: "#63a832",
         content:
            "Qualified leads are prospects who have been identified as potential customers based on specific criteria. The goal is to move them to the next stage of the funnel.",
      },
      {
         stage: "Closed",
         label: "Closed",
         count: closedCount,
         dropoffRate: closedDropoffRate,
         fill: "#32a84c",
         content:
            "Closed deals are qualified leads who have become customers. The goal is to convert as many qualified leads into customers as possible.",
      },
   ];

   return (
      <main className="flex flex-col gap-6 flex-1 p-6">
         <h2 className="text-2xl font-bold mb-4">
            Overall Sales Performance
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="">
               <CardHeader className="text-center">
                  <CardTitle>Leads</CardTitle>
                  <CardDescription>Total leads generated</CardDescription>
               </CardHeader>
               <CardContent className="text-center">
                  <div className="text-4xl font-bold">{leadCount}</div>
               </CardContent>
            </Card>
            <Card className="text-center">
               <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                  <CardDescription>Leads to customers</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="text-4xl font-bold">{(closedCount / leadCount).toFixed(2) as any * 100}%</div>
               </CardContent>
            </Card>
            <Card className="text-center">
               <CardHeader>
                  <CardTitle>Highest Dropoff Rate</CardTitle>
                  <CardDescription>Qalification</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="text-4xl font-bold">{qualifiedDropoffRate}%</div>
                  <p className="text-gray-500 dark:text-gray-400">
                     Dropoff Rate From Qualified to Closed
                  </p>
               </CardContent>
            </Card>
         </div>

         <h2 className="text-2xl font-bold mb-4">
            Sales Funnel Overview
         </h2>
         <div className="flex flex-col md:flex-row gap-4 h-1/2">
            <SalesFunnel data={JSON.stringify(funnelData)} />
            <div className="flex-1 flex flex-col gap-4">
               {funnelData.map((stage) => (
                  <Card
                     key={stage.stage}
                     className={cn(`flex-1 flex flex-col w-full`, `bg-[${stage.fill}]`)}  
                  >
                     <CardHeader className="p-2">
                        <CardTitle>{stage.label}</CardTitle>
                     </CardHeader>
                     <CardContent className="text-center">
                        Dropoff Rate: {stage.dropoffRate}%
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>

         <h2 className="text-2xl font-bold mb-4">
         Additional Data
         </h2>

         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
         <RecommendationCard
               title="Potential Deal Size"
               description={(
                <div className="space-y-4">
                    <p>
                       {`In order to calculate the sales team's effective close rate we need to
                       have a deal estimate for each lead. This will ensure we make value
                       based decisions in the sales process.`}
                    </p>
                    <p>
                        {`Landing a few very large deals in lieu of several small deals can be
                        a great value move, even though it results in a low conversion rate.`}
                    </p>
                </div>
               
               )}
            />
            <RecommendationCard
               title="Lead Metadata"
               description={(
                <div className="space-y-4">
                    <p>
                        Collect as much data as possible on each lead; industry, company size, location, etc. 
                    </p>
                    <p>
                     {`Seperating dropoff rates into different categories may shed light on specific
                        areas that can be targeted for improvement. For example, it's possible that
                        dropoffs are coming from a particular industry that you haven't historically
                        done well in.`}
                    </p>
                </div>
               )}
            />
            <RecommendationCard
               title="Sales Events/Actions"
               description={(
                <div className="space-y-4">
                    <p>
                        {`Understanding the lifecycle of each lead, in addition to proper
                        metadata, could help identify specific areas of the sale's process
                        that could use improvement.`}
                    </p>
                    <p>
                        If the 50% dropoff rate for qualified leads is a reason for concern,
                        it may be worth it to to experiment with different sales 
                        strategies.
                    </p>
                </div>
               )}
            />
         </div>

         <h2 className="text-2xl font-bold mb-4">
         Recommendations
         </h2>

         <div className="grid gap-6 md:grid-cols-3">
            <RecommendationCard
               title="Seek Customer Feedback"
               description="Implement a customer feedback system to gather insights on customer satisfaction and areas for improvement."
            />
            <RecommendationCard
               title="Review Qualification Criteria"
               description="Review and refine the qualification criteria to ensure that only the most promising leads are being pursued."
            />
            <RecommendationCard
               title="Hire Me"
               description=":)"
            />
         </div>
      </main>
   );
}

interface RecommendationCardProps {
   title: string;
   description: any;
}

const RecommendationCard = ({
   title,
   description,
}: RecommendationCardProps) => {
   return (
      <Card className="flex-1 flex flex-col transition-all hover:scale-105 hover:shadow-md">
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>{description}</CardContent>
      </Card>
   );
};

const getStageCount = async (stageId: number) => {
   const count = await prisma.leads.count({
      where: {
         OR: [
            {
               latest_stage_id: {
                  gt: stageId,
               },
            },
            {
               AND: [
                  {
                     latest_stage_id: stageId,
                  },
                  {
                     outcome: "Closed",
                  },
               ],
            },
         ],
      },
   });
   return count;
};
