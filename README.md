# Anna's Salon

A small Next.js website for a hair salon: services and prices, online booking, and a list of bookings saved in PostgreSQL. It is the example app used to check that a Web app on Stratware Labs builds, starts and talks to its database.

- `/` services and prices
- `/book` booking form (a server action writes to the database)
- `/bookings` the saved bookings
- `/api/health` answers 200 when the database is reachable

It reads `DATABASE_URL`. On Stratware Labs, connect a SQL database to the Web app and the variable is set for you. The `bookings` table is created on first use.

Run it on your own computer:

```
npm install
DATABASE_URL=postgres://user:password@localhost:5432/appdb npm run dev
```
