import { connectDB} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const user = new User({ name, email, password });
    await user.save();
    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}