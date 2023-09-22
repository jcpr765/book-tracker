import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");

  const session = await getServerSession(authOptions);

  if (session && session.user) {
    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_API_KEY}`,
      {
        headers: {
          Referer: process.env.NEXTAUTH_URL ?? "",
        },
      }
    );

    if (resp.status === 200) {
      const body = await resp.json();

      return NextResponse.json({ ...body });
    }

    return new NextResponse(null, { status: 400 });
  }

  return NextResponse.error();
}
