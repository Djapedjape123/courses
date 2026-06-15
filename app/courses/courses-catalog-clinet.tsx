"use client"

import { instructors, Course } from "@/lib/data"
import Link from "next/link"
import { useMemo, useState } from "react"

function instructorNameForCourse(course: Course): string {
    return (
        instructors.find((i) => i.slug === course.instructorSlug)?.name || "Unknown Instructor"
    )


}

export default function CoursesCatalogClinet({
    courses,
    category,
    levels
}: {
    courses: Course[],
    category: string[],
    levels: string[]
}) {

    const [level, setLevel] = useState<string>('all')
    const [categor, setCategory] = useState<string>('all')
    const [query, setQuery] = useState<string>('');

    const filterd = useMemo(() => {
        const q = query.trim().toLowerCase()

        return courses.filter((course) => {
            const matcheQueru = q === "" || course.title.toLowerCase().includes(q)
            const matcheCate = categor === "all" || course.category === categor
            const machLvl = level === "all" || course.level === level

            return matcheQueru && matcheCate && machLvl

        })
    }, [query, courses, categor, level])

    const reset = () => {
        setQuery("")
        setLevel("all")
        setLevel("all")
    };


    const isFilterd = query !== "" || categor !== "all" || level !== "all"

    return (
        <div className="stack-md">

            <div className="panel">
                <div className="grid-filters">
                    <div className="field">
                        <label htmlFor="searc" className="field-label">Searc courses by title</label>
                        <input id="searc" placeholder="NextJS" type="text" className="input"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query} />
                    </div>

                    <div className="field">
                        <label htmlFor="cat" className="field-label">Courses Category</label>
                        <select name="" id="cat"
                            className="input"
                            onChange={(e) => setCategory(e.target.value)}
                            value={categor}
                        >
                            <option value="all">All</option>
                            {category.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>


                    <div className="field">
                        <label htmlFor="lvl" className="field-label">Level</label>
                        <select name="" id="lvl"
                            className="input"
                            onChange={(e) => setLevel(e.target.value)}
                        >
                            <option value="all">All</option>
                            {levels.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="filter-bar">
                    {isFilterd ? (<button onClick={reset} className="btn-link">Reset</button>) : null}

                </div>
            </div>
            <div className="grid-cards">

                {filterd.map((course) => (
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
