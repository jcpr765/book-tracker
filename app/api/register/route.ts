import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  console.log("Made it to register");

  if (req.method === "POST") {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Must provide email and password" });
    }

    try {
      const prisma = new PrismaClient();

      const exists = await prisma.user.findUnique({ where: { email } });

      if (exists) {
        return NextResponse.json({ error: "User already exists" });
      } else {
        const user = await prisma.user.create({
          data: { email, password: await hash(password, 10) },
        });

        return NextResponse.json({ id: user.id, email });
      }
    } catch (e) {
      console.log(e);
      return NextResponse.json({ error: "Something went wrong" });
    }
  } else {
    return NextResponse.error();
  }
}
