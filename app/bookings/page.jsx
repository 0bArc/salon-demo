import { db } from "../../lib/db";

export const dynamic = "force-dynamic";
export const metadata = { title: "Bookings - Anna's Salon" };

export default async function Bookings({ searchParams }) {
  const { saved } = await searchParams;
  const pool = await db();
  const { rows } = await pool.query("select id, name, service, to_char(day, 'YYYY-MM-DD') as day from bookings order by day, id limit 100");
  return (
    <>
      <h1>Bookings</h1>
      {saved && <p className="msg ok">Booking saved.</p>}
      <div className="card">
        {rows.length ? (
          <table>
            <thead><tr><th>Day</th><th>Name</th><th>Service</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r.id}><td>{r.day}</td><td>{r.name}</td><td>{r.service}</td></tr>)}</tbody>
          </table>
        ) : <p>No bookings yet.</p>}
      </div>
    </>
  );
}
