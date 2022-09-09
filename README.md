This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Installation

```bash
$ npm install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
By the way, make sure backend is also running.

## Login instructions
email: test@test.com
password: 123

or register new user

## App logic
By default you will see all the movies that are added by other users.
Click the favorites filter to only see your movies or series

## How does search work?
I used a free thrid party API for searching movies.

## Handling pagination
I used infinite loader for the pagination. Movies will be loaded as user scrolls.
Please set the default limit in movieReducer to 2 or 3 (currently 10) to check the functionality without adding too many movies.
Also make sure your browser window small enough, so that scrollbar shows up. Otherwise scroll event won't get triggered.

## How to add movies
1. Search the movie you want to add
2. If it's not already in your favorites list, then you will see the plus icon.

## Some additional notes
I didn't hide some of the sensitive info (Like API key, secret, Port, DB credentials) to env for your sake. In a real world scenario they would have been hidden.
