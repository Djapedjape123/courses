import { getCourseBySlug, getInstructorBySlug } from "@/lib/data"
import Link from "next/link";
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const course = getCourseBySlug(slug)
    if (!course) return {}

    return {
        title: `${course.title} | Naziv sajta`,
        description: course.shortDescription,
    }
}


export default async function page({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const course = getCourseBySlug(slug);

    if (!course) notFound();
    

    const instructor = getInstructorBySlug(course.instructorSlug)
    


    return (
        
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/courses">Back to Courses</Link>
                </nav>

                <div className="course-layout">
                    <div>
                        <div className="badge-row">
                            <span className="badge">{course.category}</span>
                            <span className="badge">{course.level}</span>
                            <span className="badge">{course.duration}</span>
                        </div>
                    </div>

                    <h1 className="title-display">{course.title}</h1>
                    <p className="course-lede">{course.shortDescription}</p>

                    <div className="text-block">
                        <h2>About this course</h2>
                        <p>{course.description}</p>
                    </div>
                    <div className="lession-block">
                        <h2>What aru you learning</h2>
                        <ol>
                            {course.lessons.map((l) => (
                                <li key={l}>
                                    <span className="lesson-name">{l}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <aside className="course-aside">
                        <div className="sidebar-card">
                            <p className="sidebar-label">
                                At a glance
                            </p>

                            <dl className="meta-grid">
                                <div>
                                    <dt>Level</dt>
                                    <dd>{course.level}</dd>
                                </div>
                                <div>
                                    <dt>Duration</dt>
                                    <dd>{course.duration}</dd>
                                </div>
                                <div>
                                    <dt>Category</dt>
                                    <dd>{course.category}</dd>
                                </div>
                                <div>
                                    <dt>Lesson</dt>
                                    <dd>{course.lessonsCount}</dd>
                                </div>
                            </dl>
                        </div>

                        {instructor ? (
                            <div className="sidebar-card">
                                <p className="sidebar-label">Instructor</p>
                                <p>{instructor.name}</p>

                                <Link href={`/instructors/${instructor.slug}`}
                                  className="link-bred is-block"
                                >View profil</Link>


                            </div>
                        ) : null}


                    </aside>
                </div>
            </div>

        </section>
    )
}
