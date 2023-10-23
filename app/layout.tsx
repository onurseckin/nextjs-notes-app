/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js + TypeScript example</title>
      </head>
      <body>
        <main>
          <nav>
            <Link href="/">Home </Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
