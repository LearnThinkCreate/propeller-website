import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
    return (
        <main className="flex flex-col md:flex-row flex-1 p-6 gap-4">
            <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-center">Opportunities</h3>
                <Card>
                    <CardHeader>
                        <CardTitle>Opprtunity 1: Customer flys a site multiple times</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Customer has flown a site multiple times and has uploaded multiple flights. This could be a potential customer for a subscription.</p>
                        <br />
                        <p>Data Required</p>
                        <ul>
                            <li>Number of flights</li>
                            <li>Site Name</li>
                            <li>Customer Name</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-center">Opportunities</h3>
            <Card>
                <CardHeader>
                  <CardTitle>Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">Customers with 1 active license</div>
                      <p className="text-gray-500 dark:text-gray-400">
                        These customers may be good targets for upselling additional licenses.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium">Customers hitting license limits</div>
                      <p className="text-gray-500 dark:text-gray-400">
                        These customers may be ready to upgrade to a larger license plan.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium">Customers sharing drones</div>
                      <p className="text-gray-500 dark:text-gray-400">
                        These customers may benefit from additional licenses to avoid sharing drones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </main>
    );
}