"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  projectName:string
  requestedDonation: number
  totalFund:number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "_id",
        header: () => <div>Project ID</div>,
    },
    {
        accessorKey: "projectName",
        header: () => <div>Project Name</div>,
    },
    
    {
        accessorKey: "requestedDonation",
        header: () => <div>Requested Donation ($)</div>,
    },
    
    
  ]
  
