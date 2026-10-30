import { book } from "./actions";

export const metadata = { title: "Book - Anna's Salon" };

export default async function Book({ searchParams }) {
  const { error } = await searchParams;
  return (
    <>
      <h1>Book a service</h1>
      {error && <p className="msg">Please fill in every field.</p>}
      <form action={book} className="card form">
        <label>Your name<input name="name" required maxLength={80} /></label>
        <label>Service
          <select name="service" defaultValue="Haircut">
            <option>Haircut</option><option>Colour</option><option>Cut and blow dry</option><option>Beard trim</option>
          </select>
        </label>
        <label>Day<input name="day" type="date" required /></label>
        <button className="btn" type="submit">Book</button>
      </form>
    </>
  );
}
