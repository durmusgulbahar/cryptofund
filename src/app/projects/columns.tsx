"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  projectName:string
  requestFund: number
  totalFund:number
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: () => <div>Project ID</div>,
    },
    {
        accessorKey: "projectName",
        header: () => <div>Project Name</div>,
    },
    {
        accessorKey: "totalFund",
        header: () => <div>Total Fund</div>,
      
      },
    {
        accessorKey: "requestFund",
        header: () => <div>Requested Fund</div>,
    },
    {
        accessorKey: "status",
        header: () => <div>Status</div>,
    },
    
  ]
  
