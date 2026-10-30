import pg from "pg";

// One pool for the whole server. The lab hands the app DATABASE_URL when a SQL database is connected to it.
const store = globalThis;
const pool = store.__salonPool || new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 4, connectionTimeoutMillis: 4000 });
store.__salonPool = pool;

let ready;
export function db() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set. Connect a SQL database to this app.");
  ready ||= pool.query(`create table if not exists bookings (
    id serial primary key,
    name text not null,
    service text not null,
    day date not null,
    created_at timestamptz not null default now()
  )`).catch((e) => { ready = undefined; throw e; });
  return ready.then(() => pool);
}
