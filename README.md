# Admin Manager

## Fullstack Administrative web app

An open source application built using the new router, server components and everything new in Next.js 13.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@vercel](https://twitter.com/vercel).
> See the roadmap below.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation with **tRPC**
- Loading UI
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js** <https://next-auth.js.org/>
- ORM using **Prisma** <https://www.prisma.io/>
- DATA PROXY **Prisma** Scaling database connections in Serverless functions [data-proxy]<https://www.prisma.io/data-platform/proxy>
- Database on **MongoDB** <https://www.mongodb.com/>
- Styled using **Tailwind CSS** <https://tailwindcss.com/>
- UI Components built using **Radix UI** <https://www.radix-ui.com/>
- Documentation and blog using **MDX** and **Contentlayer**
- Subscriptions using **Stripe** <https://stripe.com>
- Validations using **Zod** <https://zod.dev/>
- Client and server state management with **zustand** <https://zustand-demo.pmnd.rs/>
- Server and client type safe with **tRpc** and **Prisma** <https://trpc.io/>
- Written in **TypeScript**

## Roadmap

## Separating UI Components

- [x] Create Design System with UI Components  [Figma Design System](https://www.figma.com/file/j32l029L2OzdItUQIE3fbh/Admin-Manager-Colors?t=3arr77aHD6ZsSVj4-1)
- [x] Create atoms
- [] Create melocules
- [] Create organims

## Clean Architecture

- [x] MongoDB with Prisma [Advanced MongoDB Workshop](https://prismaio.notion.site/Advanced-MongoDB-Workshop-4a11353478b2410aa3768ca59c274507)
- [x] Model / [Prisma](https://prisma.io)
- [] Components
- [x] server fetch Adapters / [Prisma](https://prisma.io)
- [x] client fetch Adapters / [tRPC](https://trpc.io/docs/client/introduction)
- [x] combine prisma and trpc to get type safe in client side [fullstack type safe](https://www.prisma.io/nextjs)
- [x] add prisma data proxy [data-proxy]<https://www.prisma.io/data-platform/proxy>
- [] External services

## Build basic

- [] Promoting page.

## Build basic layout

- [x] UI basic laoyut design. [Figma Design System](https://www.figma.com/file/j32l029L2OzdItUQIE3fbh/Admin-Manager-Colors?t=3arr77aHD6ZsSVj4-1)
- [x] UX basic laoyut design. [Figma Design System](https://www.figma.com/file/j32l029L2OzdItUQIE3fbh/Admin-Manager-Colors?t=3arr77aHD6ZsSVj4-1)

## Basic Configuration Home Page for Owners and Members

- [] Master of Companies and composition Page
- [] Membership assignment by company
- [] Definition of user roles by company

## Design function of the structure of the application

- [x] General options menus
- [] Sub Menu of specific options
- [] Design of the structure of each specific module
- [] List Design (Infinite list layout)
- [x] General screen layout

## Build business logic

- [x] Prisma schemas.   [Prisma](https://prisma.io)
- [x] MongoDB provider. [MongoDB](https://mongodb.com)
- [x] login.            [Next.js](https://nextjs.org) [NextAuth.js](https://next-auth.js.org)
- [x] Implement server and client state management with zustand
- [x] Implement server and client type safe [tRPC](https://trpc.io/docs/client/introduction)
- [] configure first time setup (in progress)
- [] configure stripe subscription
- [] companies.
- [] user's access permissions to companies.
- [] user's access permissions to stock & inventory modules

- [] stock inventory's adjust business logic
- [] stock inventory's transfers business logic (local & inter companies wharehouse)

- [] stock inventory's business logic
- [] stock prices business logic (multi companies)
- [] product's business logic (grouping by companies)
  - [] Provider's Orders.
  - [] Provider's Purchases.
  - [] Provider's Merchandise reception

## Build authenticated & first time setup (Wizard) pages

- [x] Login.
    ![WebAuthn Architecture](public/next-auth-diagram.jpg)
     <https://next-auth.js.org/>
- [x] basic wizard componenct
- [] configure first time setup wizard.
   ![Strype subscription example ](public/stripe-model.ie.png)
- [] configure stripe subscription wizard
![Strype design ](public/blog-payment-api-design-diagram.svg)

## Build Home pages

- [] Promotional Landing Home page.

## Build Stock pages

- [] Inventory's adjust dashboard.
- [] Inventory's transfers dashboard.
- [] Inventory's dashboard.
- [] Product's dashboard.
  - [] Budget
  - [] Provider's Orders.
  - [] Provider's Purchases.
  - [] Provider's Merchandise reception

- [] Prices dashboard.

## Build Incoming pages

- [] Providers Orders
- [] Merchandise reception
- [] Merchandise purchase
  - [] Purchase expenses (Import expenses & others)
  - [] Close purchase

## Build Outcoming pages

- [] Customer orders confirmation
- [] Dispatch of merchandise
- [] Invoicing

## Known Issues

A list of things not working right now:

1. ~GitHub authentication (use email)~
2. ~[Prisma: Error: ENOENT: no such file or directory, open '/var/task/.next/server/chunks/schema.prisma'](https://github.com/prisma/prisma/issues/16117)~
3. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~

## Why not Turborepo or X?

I might add this later. For now, I want to see how far we can get using Next.js only.

If you have some suggestions, feel free to create an issue.
