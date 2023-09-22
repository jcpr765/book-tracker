import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <div className="text-2xl">Book Tracker Home Page</div>
      <br />
      {session?.user?.name ? <>Hi {session.user.name}</> : <>Please log in</>}
    </>
  );
}
