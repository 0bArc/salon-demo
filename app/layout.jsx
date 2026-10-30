import "./globals.css";

export const metadata = { title: "Anna's Salon", description: "Haircuts, colour and styling. Book online." };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="top">
          <div className="in">
            <a className="brand" href="/">Anna&apos;s Salon</a>
            <nav>
              <a href="/">Services</a>
              <a href="/book">Book</a>
              <a href="/bookings">Bookings</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer><div className="in">Open Tuesday to Saturday, 9 to 17.</div></footer>
      </body>
    </html>
  );
}
