/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";
import "../styles/recisnap-theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/instructions">Instructions</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
