"use client"

import { Course } from "@/lib/data"
import Link from "next/link"

export default function CoursesCatalogClinet({
    courses,
    category
}:{
   courses: Course[],
   category: String[]
}) {
    return (
        <div className="stack-md">
            <div className="grid-cards">

                {courses.map((course) => (
                    <Link 
                        href={`/courses/${course.slug}`}
                        key={course.id}>
                          <p>{course.title}</p>

                    </Link>
                ))}

                <Link href="#" className="card-link">

                    <div className="badge-row">
                        <span className="badge">Web developer</span>
                        <span className="badge ">Beginer</span>
                    </div>

                    <h3 className="card-link-title">Next.js and Tailwind CSS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo!</p>

                    <dl className="card-meta">
                        <div>
                            <dt className="">lessons</dt>
                            <dd>12 lessons</dd>
                        </div>

                        <div>
                            <dt className="">Ducation</dt>
                            <dd>5h</dd>
                        </div>

                    </dl>


                </Link>
            </div>

        </div>
    )
}
