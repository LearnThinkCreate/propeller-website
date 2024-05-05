export type CustomerLargestUploads = {
    customer_name: string
    largest_upload: number
    drone_model: string
    upload_date: Date // new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(customerLargestUploads[0].upload_date)
}

export type CustomersWithMultipleDrones = {
    customer_name: string
    num_drones: number
}

export type CustomerDronePreference = {
    customer_name: string
    drone_model: string
    num_uploads: number
}

export type RecentCustomerActivity = {
    customer_name: string
    drone_model: string
    last_upload_date: Date
}

export const propellerTableArray = [
    'customerLargestUploads', 
    'customersWithMultipleDrones', 
    'customerDronePreference', 
    'recentCustomerActivity'
  ] as const;
  
// Derive the type from the array values
export type PropellerTable = typeof propellerTableArray[number];
export type PropellerTableColumn = CustomerLargestUploads | CustomersWithMultipleDrones | CustomerDronePreference | RecentCustomerActivity;