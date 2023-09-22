import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response("Must provide email and password", { status: 400 });
    }

    try {
      const prisma = new PrismaClient();

      const user = await prisma.user.findUnique({ where: { email } });

      if (user) {
        const hashedPw = await hash(password, 10);

        if (user.password === hashedPw) {
          return NextResponse.json(user);
        }
      } else {
        return new Response("User does not exist", { status: 404 });
      }
    } catch (e) {
      return new Response("Something went wrong", { status: 500 });
    }
  } else {
    return new Response("Bad request", { status: 400 });
  }

  return new Response("", { status: 500 });
}
