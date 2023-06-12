import { NextResponse } from "next/server"
export function GET (req) {
  console.log('hi')
  return new NextResponse('helli')
}