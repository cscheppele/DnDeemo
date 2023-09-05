DnDeemo, making DnD accessible to beginners.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I used Node and npm, so instructions are for such.

prisma and postgresql are used for the DB.

## Getting Started

you will need to use your own openAI key to run the story building.  This can be acquired here [open.ai](https://platform.openai.com/overview)

create a .env file and store the openAI key in it.

you will also need to run the following code to get the database up and running.

```bash
npx prisma migrate dev --name init
```

First, compile the Typescript:
```bash
npm run build
```

then start the server:

```bash
npm run dev

```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the homepage.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
