import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export const dynamic = "force-dynamic";

// Answers 200 when the app can reach its database, 503 when it cannot.
export async function GET() {
  try {
    const pool = await db();
    const { rows } = await pool.query("select count(*)::int as bookings from bookings");
    return NextResponse.json({ ok: true, database: "connected", bookings: rows[0].bookings });
  } catch (e) {
    return NextResponse.json({ ok: false, database: "unreachable", error: e.message }, { status: 503 });
  }
}
