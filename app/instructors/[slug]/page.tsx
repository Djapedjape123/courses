import { getCoursesByInstructor, getInstructorBySlug } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"

function initials(name: string): string {
    return name
        .split(" ")
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase()
}

export default async function page({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const instructor = getInstructorBySlug(slug);

    if (!instructor) notFound()

    const kursevi = getCoursesByInstructor(instructor.slug)
    return (
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/instructors">Back to insturtors</Link>
                </nav>

                <div className="profile-hero">
                    <div className="avatar avatar-lg">{initials(instructor.name)}</div>
                    <div className="profile-body">
                        <p className="eyebrown">{instructor.specialty}</p>
                        <h1 className="title-display">{instructor.name}</h1>
                        <p>{instructor.bio}</p>
                    </div>
                </div>
                <div className="courses-below">
                        <h2>
                            Courses by {instructor.name.split(" ")[0]}
                        </h2>
                        {kursevi.length === 0 ? (
                            <span>No curses</span>
                        ) : (
                            <div className="grid-cards mt-sm">
                                {kursevi.map((course) => (
                                    <Link
                                        key={course.id}
                                        href={`/courses/${course.slug}`}
                                        className="card-link"
                                    >
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
                                            <span className="">BY {instructor.name}</span>
                                            <span className="card-footer-cta">View Courses</span>
                                        </div>
                                        
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
            </div>

        </section>
    )
}
