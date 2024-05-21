"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  txId: string
  from:string
  amount: number
  timestamp:number
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "txId",
        header: () => <div>Tx ID</div>,
    },
    {
        accessorKey: "from",
        header: () => <div>From</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div>Amount</div>,
      
      },
    {
        accessorKey: "timestamp",
        header: () => <div>Date</div>,
    },
   
    
  ]
  
