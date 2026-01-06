import { NextResponse } from "next/server";
import { insertUser } from "@/infrastructure/db/userRepository";

export async function GET() {
  const user = await insertUser(`test-${Date.now()}@example.com`);
  return NextResponse.json(user);
}

