import prisma from '@/lib/prisma';
import { SalesFunnel } from '@/components/sales-funnel';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
    const leadCount = await prisma.leads.count();
    const prospectCount = await getStageCount(1);
    const qualifiedCount = await getStageCount(2);
    const closedCount = await getStageCount(3);

    const leadDropoffRate = (leadCount - prospectCount) / leadCount;
    const prospectDropoffRate = (prospectCount - qualifiedCount) / prospectCount;
    const qualifiedDropoffRate = (qualifiedCount - closedCount) / qualifiedCount;
    const closedDropoffRate = 0;

    const funnelData = [
        {
            stage: 'Lead',
            count: leadCount,
            dropoffRate: leadDropoffRate,
            fill: '#32a84c'
        },
        {
            stage: 'Prospect',
            count: prospectCount,
            dropoffRate: prospectDropoffRate,
            fill: '#63a832'
        },
        {
            stage: 'Qualified',
            count: qualifiedCount,
            dropoffRate: qualifiedDropoffRate,
            // pick a new cool color
            fill: '#89a832'
        },
        {
            stage: 'Closed',
            count: closedCount,
            dropoffRate: closedDropoffRate,
            fill: '#facc15'
        }
    ]

    return (

        <main className="flex flex-col md:flex-row flex-1 p-6 gap-4">
               
        <SalesFunnel data={JSON.stringify(funnelData)} />
        <div className="flex-1 flex flex-col gap-4">
            <Card className="flex-1 flex flex-col w-full">
                <CardHeader>
                    <CardTitle>Leads</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>Leads are the first stage in the sales funnel. They are potential customers who have shown interest in your product or service. The goal is to move them to the next stage of the funnel.</p>
                </CardContent>
            </Card>

            <Card className="flex-1 flex flex-col w-full">
                <CardHeader>
                    <CardTitle>Prospects</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>Prospects are leads who have shown interest in your product or service and are likely to become customers. The goal is to move them to the next stage of the funnel.</p>
                </CardContent>
            </Card>

            <Card className="flex-1 flex flex-col w-full">
                <CardHeader>
                    <CardTitle>Qualified</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>Qualified leads are prospects who have been identified as potential customers based on specific criteria. The goal is to move them to the next stage of the funnel.</p>
                </CardContent>
            </Card>


            <Card className="flex-1 flex flex-col w-full">
                <CardHeader>
                    <CardTitle>Closed</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>Closed deals are qualified leads who have become customers. The goal is to convert as many qualified leads into customers as possible.</p>
                </CardContent>
            </Card>
        </div>

      </main>
    );
}

const getStageCount = async (stageId: number) => {
    const count = await prisma.leads.count({
        where: {
            "OR": [
                {
                    latest_stage_id: {
                        gt: stageId
                    }
                },
                {
                    "AND": [
                        {
                            latest_stage_id: stageId,
                        },
                        {
                            outcome: 'Closed'
                        }
                    ]
                }
            ]
        }
    });
    return count;
}