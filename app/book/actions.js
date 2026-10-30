"use server";

import { redirect } from "next/navigation";
import { db } from "../../lib/db";

const SERVICES = ["Haircut", "Colour", "Cut and blow dry", "Beard trim"];

export async function book(formData) {
  const name = String(formData.get("name") || "").trim().slice(0, 80);
  const service = String(formData.get("service") || "");
  const day = String(formData.get("day") || "");
  if (!name || !SERVICES.includes(service) || !/^\d{4}-\d{2}-\d{2}$/.test(day)) redirect("/book?error=1");
  const pool = await db();
  await pool.query("insert into bookings (name, service, day) values ($1, $2, $3)", [name, service, day]);
  redirect("/bookings?saved=1");
}
