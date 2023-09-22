import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="text-2xl">Book Tracker Home Page</div>
      <br />
      {session?.user?.name ? <>Hi {session.user.name}</> : <>Please log in</>}
    </>
  );
}
