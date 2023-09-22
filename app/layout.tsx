import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import NavMenu from "./components/NavMenu";
import { authOptions } from "./api/auth/[...nextauth]/route";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Tracker",
  description: "Tracks books",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="mx-auto max-w-5xl text-2xl flex gap-2">
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
