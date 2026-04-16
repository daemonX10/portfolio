import { NextResponse } from "next/server";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1OIE9ZRhk-WUAHaGofsJiqILq6lrHY1ih";

export function GET() {
  return NextResponse.redirect(RESUME_DOWNLOAD_URL, 302);
}
