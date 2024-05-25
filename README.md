## CryptoFund

Cryptofund is a funding site (similar to GoFundMe) with on-chain transactions for the donations. This project was done for the CSE4 Introduction to Blockchain course. 

### Tech-Stack

- The front-end of the project is done with Next.js, a React framework that uses Typescript.
- The UI elements are from the shadcn/ui ui library. 
- The smart contracts are written with Solidity and run on the EVM.
- The database used for things that don't require to be decentralized (like photos, project description etc.) is MongoDB.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Running the Project Locally 

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.