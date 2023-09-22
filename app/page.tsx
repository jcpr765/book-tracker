import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <div className="text-2xl">Book Tracker Home Page</div>
      {session?.user?.name ? <>{session.user.name}</> : <>Not logged in</>}
    </>
  );
}
