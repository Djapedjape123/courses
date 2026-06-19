import { Course } from "@/lib/data";

import { headers } from "next/headers";

async function fetchCourses(q:string): Promise< {
    count : number,
    courses : Course[]
}  | null> {
    const headersList = await headers();
    const host = headersList.get("host") ?? "localhost:3000";
    const proto = headersList.get("x-forwarded-proto") ?? "http";
    const url = `${proto}://${host}/api/courses?q=${encodeURIComponent(q)}`

    const res = await fetch(url,{cache:"no-store"});

    if (!res.ok) return null;

    return res.json();
        

}


export default async function page({
    searchParams
}:{
    searchParams: Promise<{q?:string}>
}) {
    const SP = await searchParams;
    const row = SP.q;

    const trimed = row ? row : ""

    const data = await fetchCourses(trimed)

    console.log(data)

    const {count,courses} = data
    
  return (
    <section>
        {courses.map((e) =>(
            <h2 key={e.id}>{e.title}</h2>
        ))}
    </section>
  )
}
