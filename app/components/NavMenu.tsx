"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import MobileNavMenu from "./MobileNavMenu";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

interface Route {
  label: string;
  path: string;
}

const routes: Route[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Search for Books",
    path: "/search",
  },
];

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <>
      <MobileNavMenu />
      {/*Desktop version*/}
      <div className="px-6 bg-slate-700 h-screen hidden md:block">
        <AuthButton />
        <hr className="my-4" />
        <ul>
          {routes.map(({ label, path }, idx) => (
            <Link href={path} key={idx}>
              <li className={pathname === path ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
