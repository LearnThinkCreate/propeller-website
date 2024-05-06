import * as queries from "@/lib/queries";
import {
   CollapsibleTrigger,
   CollapsibleContent,
   Collapsible,
} from "@/components/ui/collapsible";

export default async function Page() {
   return (
      <main className="flex flex-col flex-1 p-6 gap-4">
         {queryData.map((query) => (
            <CollapsibleCard key={query.id} {...query} />
         ))}
      </main>
   );
}

const CollapsibleCard = (query: any) => {
   return (
      <Collapsible className="border rounded-lg overflow-hidden">
         <CollapsibleTrigger className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-6 py-4 w-full">
            <h3 className="font-semibold">{query.name}</h3>
         </CollapsibleTrigger>
         <CollapsibleContent className="p-6 space-y-4">
            <div>
               <h4 className="font-medium mb-2">Question</h4>
               <p>{query.question}</p>
            </div>
            <div>
               <h4 className="font-medium mb-2">Solution</h4>
               <pre className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 overflow-auto">
                  <code className="language-sql">{query.SQL}</code>
               </pre>
               <p className="text-sm text-gray-500 dark:text-gray-400">
                  {query.description}
               </p>
            </div>
         </CollapsibleContent>
      </Collapsible>
   );
};

const queryData = [
   {
      id: 1,
      name: "Largest Upload per Customer",
      question:
         "For each customer, find the maximum upload size they have ever uploaded.",
      SQL: queries.CUSTOMER_LARGEST_UPLOADS,
      description: "This query selects each customer's largest upload and associated drone model by joining the customers, uploads, and products tables. It calculates the maximum upload size for each customer and groups the results by customer, upload date, and drone model. The data is then ordered by the largest upload in descending order."
   },
   {
      id: 2,
      name: "Total Upload Size by Drone Model",
      question: "Sum the total size of uploads for each drone model.",
      SQL: queries.DRONE_UPLOAD_SIZE,
      description: "This query calculates the total size of uploads for each drone model by joining the products and uploads tables. It groups the results by drone model and orders the data by the total size in descending order."
   },
   {
      id: 3,
      name: "Identify Customers with Multiple Drones",
      question:
         "Find customers who have uploaded data from more than one type of drone.",
      SQL: queries.CUSTOMERS_MULTIPLE_DRONE,
      description: "This query selects customers who have uploaded data from more than one type of drone by joining the customers and uploads tables. It counts the number of distinct drone models each customer has uploaded data from and filters the results to only include customers with more than one drone model. The data is then ordered by the number of drone models in descending order."
   },
   {
      id: 4,
      name: "Monthly Upload Activity",
      question:
         "Show the total number of uploads and total upload size for each month.",
      SQL: queries.MONTHLY_UPLOAD_ACTIVITY,
      description: "This query calculates the total number of uploads and total upload size for each month by grouping the uploads table by month. It orders the results by month."
   },
   {
      id: 5,
      name: "Top 3 Largest Uploads:",
      question:
         "Identify the top 3 largest uploads across all customers and provide details of the corresponding customer and drone model.",
      SQL: queries.LARGEST_UPLOADS,
      description: "This query selects the top 3 largest uploads across all customers by joining the customers, uploads, and products tables. It groups the results by customer name, upload date, and drone model, sums the total size of each upload, and orders the data by the largest upload in descending order. The output is limited to the top 3 uploads."
   },
   {
      id: 6,
      name: "Site Activity",
      question: "Determine which site has the highest number of uploads",
      SQL: queries.SITE_ACTIVITY,
      description: "There is a many-to-one relationship between sites and uploads. Multiple sites can be associated with a single upload. This question should be worded as 'Which upload has the highest number of sites?' The query groups the uploads by upload ID and counts the number of sites associated with each upload. It then orders the results by the number of sites in descending order."
   },
   {
      id: 7,
      name: "Customer Drone Preference",
      question:
         "List each customer along with the most frequently used drone model based on the number of uploads.",
      SQL: queries.CUSTOMER_DRONE_PREFERENCE,
      description: "This query selects each customer and their most frequently used drone model based on the number of uploads by joining the customers, uploads, and products tables. It counts the number of uploads for each customer and drone model, groups the results by customer name and drone model, orders the data by the number of uploads in descending order, and limits the output to the top 1 drone model per customer."
   },
   {
      id: 8,
      name: "Percentage of Total Uploads by Model",
      question:
         "For each drone model, calculate the percentage they contribute to the total number of uploads.",
      SQL: queries.UPLOADS_BY_MODEL,
      description: "This query calculates the percentage of total uploads contributed by each drone model by joining the products and uploads tables. It counts the number of uploads for each drone model, calculates the total number of uploads, and calculates the percentage of uploads contributed by each drone model. The data is ordered by the percentage contributed in descending order."
   },
   {
      id: 9,
      name: "Recent Customer Activity",
      question:
         "Find all customers who have made an upload in the last 30 days.",
      SQL: queries.RECENT_CUSTOMER_ACTIVITY,
      description: "This query selects all customers who have made an upload in the last 30 days by joining the customers and uploads tables. It filters the results to only include uploads within the last 30 days and groups the data by customer name."
   },
];
