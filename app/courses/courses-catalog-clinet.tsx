"use client"

import { instructors,Course } from "@/lib/data"
import Link from "next/link"

 function instructorNameForCourse(course: Course): string {
    return (
        instructors.find((i) => i.slug === course.instructorSlug)?.name || "Unknown Instructor"
    )
   
 
 }

export default function CoursesCatalogClinet({
    courses,
    category
}: {
    courses: Course[],
    category: String[]
}) {
    return (
        <div className="stack-md">
            <div className="grid-cards">

                {courses.map((course) => (
                    <Link
                        href={`/courses/${course.slug}`}
                        key={course.id}
                        className="card-link">

                        <div className="badge-row">
                            <span className="badge">{course.category}</span>
                            <span className="badge ">{course.level}</span>
                        </div>

                        <h3 className="card-link-title">{course.title}</h3>
                        <p>{course.shortDescription}</p>

                        <dl className="card-meta">
                            <div>
                                <dt className="">lessons</dt>
                                <dd>{course.lessonsCount}</dd>
                            </div>

                            <div>
                                <dt className="">Ducation</dt>
                                <dd>{course.duration}</dd>
                            </div>

                        </dl>

                        <div className="card-footer">
                            <span className="">BY {instructorNameForCourse(course)}</span>
                            <span className="card-footer-cta">View Courses</span>
                        </div>


                    </Link>
                ))}


            </div>

        </div>
    )
}
