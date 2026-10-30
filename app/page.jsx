const SERVICES = [
  ["Haircut", "45 min", "$35"],
  ["Colour", "2 h", "$90"],
  ["Cut and blow dry", "1 h", "$55"],
  ["Beard trim", "20 min", "$15"]
];

export default function Home() {
  return (
    <>
      <h1>Anna&apos;s Salon</h1>
      <p className="lead">Haircuts, colour and styling in the middle of town. Pick a service and book a day online.</p>
      <div className="card">
        <table>
          <thead><tr><th>Service</th><th>Time</th><th>Price</th></tr></thead>
          <tbody>{SERVICES.map(([name, time, price]) => <tr key={name}><td>{name}</td><td>{time}</td><td>{price}</td></tr>)}</tbody>
        </table>
      </div>
      <p><a className="btn" href="/book">Book a service</a></p>
    </>
  );
}
