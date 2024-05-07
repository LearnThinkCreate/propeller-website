import * as React from "react";
import { cn } from "@/lib/utils";

export default async function Page() {
   const siteSizeOpportunity = 0;
   const transportationOpportunity = 1;
   const swapOpportunity = 2;
   const recommendations = 3;
   return (
      <main className="flex flex-col min-h-screen">
         <Header />
         <Opportunity index={siteSizeOpportunity}>
            <OpportunityBody>
               <OpportunityHeader>
                  Customer Site Size Exceeds Drone Limit
               </OpportunityHeader>
               <OpportunityContent>
                  <OpportunityContentItem>
                     <OpportunitListHeader index={siteSizeOpportunity}>
                        Questions
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="How Much Extra Time Is The Customer Spending Scanning?"
                           body={`
                           Can we calculate the extra costs incurred from repeatedly
                           scanning a site to demonstrate the financial advantages of
                           upgrading their license?
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>

                  <OpportunityContentItem>
                     <OpportunitListHeader index={siteSizeOpportunity}>
                        Additional Data
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Drone Logs"
                           body={`
                           Organize drone logs to identify the number of times a site has
                           been scanned in addition to the total time spent scanning.
                        `}
                        />
                        <OpportunityListItem
                           header="Operational Cost"
                           body={`
                           Estimate the operational cost incurred by the customer for
                           each additional unit of time spent scanning a site.
                        `}
                        />
                        <OpportunityListItem
                           header="Metric: Additional Cost Per Square Kilometer Over Limit"
                           body={`
                           Estimate the additional cost per square kilometer so that the
                           customer can understand the financial benefits of upgrading
                           their license.
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>
               </OpportunityContent>
            </OpportunityBody>
         </Opportunity>

         <Opportunity index={transportationOpportunity}>
            <OpportunityBody>
               <OpportunityHeader>
                  Customer Transports Drone Large Distances
               </OpportunityHeader>
               <OpportunityContent>
                  <OpportunityContentItem>
                     <OpportunitListHeader index={transportationOpportunity}>
                        Questions
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Can Drones Be Controlled Remotely From Large Distances?"
                           body={`
                           This is a question for the Propeller team. What are the 
                           limitations of controlling drones remotely? Is one of the 
                           reasons customers are transporting drones large distances
                           because they can't be controlled remotely?
                        `}
                        />
                     </OpportunityList>
                     <OpportunityList>
                        <OpportunityListItem
                           header="How Much Extra Time Is The Customer Spending en Route?"
                           body={`
                           Can we calculate the extra costs incurred from transporting. 
                           Including labor cost, fuel cost, and any other costs associated
                           with transporting drones large distances.
                        `}
                        />
                     </OpportunityList>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Does the Customer Have Employees Close To the Sites the Drone Is Being Transported To?"
                           body={`
                           If the sites being traveled to are in far, but remote, locations
                           the customer may not have employees close to the site who could
                           operate the drone, even if given a new liscense. 
                        `}
                        />
                        <OpportunityListItem
                           body={`
                           Identifying these customers and removing them from the lead list
                           could increase sales efficiency                           
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>

                  <OpportunityContentItem>
                     <OpportunitListHeader index={transportationOpportunity}>
                        Additional Data
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Drone Logs"
                           body={`
                           Organize drone logs to identify where a drone is being 
                           used
                        `}
                        />
                        <OpportunityListItem
                           header="Transportation Cost"
                           body={`
                           Estimated transportation cost incurred by the customer. This data would 
                           ideally be used in conjuction with the drone logs to be accurate
                           at the customer level
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>
               </OpportunityContent>
            </OpportunityBody>
         </Opportunity>

         <Opportunity index={swapOpportunity}>
            <OpportunityBody>
               <OpportunityHeader>
                  Customer Frequently Swaps Drones
               </OpportunityHeader>
               <OpportunityContent>
                  <OpportunityContentItem>
                     <OpportunitListHeader index={swapOpportunity}>
                        Questions
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Why do customers swap drones?"
                           body={`
                           Are the root cause of the swaps known
                           and understood?
                        `}
                        />
                        <OpportunityListItem
                           header="How often do swaps occur?"
                           body={`
                           Understanding the frequency of swaps can help gauge the inconvenience or cost implications to the customer.
                        `}
                        />
                        <OpportunityListItem
                           header="What impact do these swaps have on project timelines and costs?"
                           body={`
                           Are there delays or increased costs associated with swapping drones, such as downtime, recalibration, or transportation?
                        `}
                        />
                        <OpportunityListItem
                           header="What types of projects are these drones being used for?"
                           body={`
                           Knowing whether the projects are commercial, agricultural, construction, etc., can provide insights into why multiple drones might be needed.
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>

                  <OpportunityContentItem>
                     <OpportunitListHeader index={swapOpportunity}>
                        Additional Data
                     </OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Swap Logs"
                           body={`
                           Data on when and why each swap is made, including any recorded challenges 
                           or inefficiencies caused by these swaps.
                        `}
                        />
                        <OpportunityListItem
                           header="Project Details"
                           body={`
                           Information on the projects where drones are swapped, including 
                           the project size, duration, and location.
                        `}
                        />
                        <OpportunityListItem
                           header="Cost Analysis Related to Swaps"
                           body={`
                           Data on the cost implications of swapping drones, including operational and labor costs
                        `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>
               </OpportunityContent>
            </OpportunityBody>
         </Opportunity>

         <Opportunity index={recommendations}>
            <OpportunityBody>
               <OpportunityHeader>
                  Recommendations for Maximizing Upsell Opportunities
               </OpportunityHeader>
               <OpportunityContent>
                  <OpportunityContentItem>
                     <OpportunitListHeader index={recommendations}></OpportunitListHeader>
                     <OpportunityList>
                        <OpportunityListItem
                           header="Gather Feedback from Customers"
                           body={`
                              Select a sample of customers from each opportunity category and conduct interviews 
                              or surveys to understand their pain points, needs, and preferences. This qualitative data can 
                              provide insights into the customer experience and help tailor sales strategies accordingly.
                           `}
                        />
                        <OpportunityListItem
                           header="Create Customer Segments"
                           body={`
                              Offer discounts, promotions, or bundled packages to select customers identified in
                              the opportunity categories. Create customer segments based on their needs, behaviors, or
                              preferences to target them with personalized offers.
                           `}
                        />
                        <OpportunityListItem
                           body={`
                              Measure the impact of these targeted strategies on customer satisfaction, cost savings,
                              and revenue generation. Use data analytics and customer feedback to refine the sales approach
                              and continuously improve the upsell process.
                           `}
                        />
                     </OpportunityList>
                  </OpportunityContentItem>
               </OpportunityContent>
            </OpportunityBody>
         </Opportunity>
      </main>
   );
}

const Header = () => (
   <section className="bg-primary text-background py-16 px-8 md:px-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
         Revenue Opportunities
      </h1>
   </section>
);

interface OpportunityProps extends React.HTMLAttributes<HTMLDivElement> {
   index: number;
}

const Opportunity = React.forwardRef<HTMLDivElement, OpportunityProps>(
   ({ className, index, ...props }, ref) => (
      <section
         ref={ref}
         className={cn(
            "py-16 px-8 md:px-16",
            index % 2 === 0 ? "bg-background" : "bg-primary text-background"
         )}
         {...props}
      />
   )
);
Opportunity.displayName = "Opportunity"

const OpportunityBody = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      {...props}
      className={cn("max-w-3xl mx-auto space-y-5", className)}
   />
));
OpportunityBody.displayName = "OpportunityBody"

const OpportunityContent = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div ref={ref} {...props} className={cn("space-y-10", className)} />
));
OpportunityContent.displayName = "OpportunityContent"

const OpportunityContentItem = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div ref={ref} {...props} className={cn("space-y-4", className)} />
));
OpportunityContentItem.displayName = "OpportunityContentItem"

const OpportunityHeader = React.forwardRef<
   HTMLHeadingElement,
   React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h2
      ref={ref}
      {...props}
      className={cn("text-4xl font-bold mb-8", className)}
   />
));
OpportunityHeader.displayName = "OpportunityHeader"

const OpportunityList = React.forwardRef<
   HTMLUListElement,
   React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
   <ul ref={ref} {...props} className={cn("space-y-4", className)} />
));
OpportunityList.displayName = "OpportunityList"

interface OpportunitListHeaderProps
   extends React.HTMLAttributes<HTMLHeadingElement> {
   index: number;
}
const OpportunitListHeader = React.forwardRef<
   HTMLHeadingElement,
   OpportunitListHeaderProps
>(({ className, index, ...props }, ref) => (
   <h2
      ref={ref}
      {...props}
      className={cn(
         "text-3xl font-bold border-b pb-4",
         index % 2 === 0 ? "border-foreground" : "border-background"
      )}
   />
));
OpportunitListHeader.displayName = "OpportunitListHeader"

interface OpportunityListItemProps {
   header?: string;
   body?: string;
}

const OpportunityListItem = ({ header, body }: OpportunityListItemProps) => (
   <li>
      {header && <h3 className="text-xl font-bold mb-2">{header}</h3>}
      <p>{body}</p>
   </li>
);
