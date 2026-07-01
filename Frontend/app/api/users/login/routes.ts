import { connectDB} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}