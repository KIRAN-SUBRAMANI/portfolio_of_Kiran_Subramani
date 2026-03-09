import { NextResponse } from "next/server";
import { portfolioData } from "@/utils/data/portfolioData";

export async function GET() {
  return NextResponse.json(portfolioData);
}