import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("api/auth/signin");
  }

  return <>{children}</>;
}
