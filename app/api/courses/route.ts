import { getAllCourses } from "@/lib/data";
import { count } from "console";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)

    const q = searchParams.get("q")?.trim() ?? "";

    let courses = getAllCourses();

    if(q){
        const needle = q.toLowerCase();

        courses.filter(
            (c) => c.title.toLowerCase().includes(needle)
        );

    }
   return NextResponse.json({
      count: courses.length,
      courses
   })

}