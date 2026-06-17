import { getAllInstructors } from "@/lib/data";
import Link from "next/link";

function initials(name: string): string{
  return name
            .split(" ")
            .map((part) => part[0])
            .filter(Boolean)
            .slice(0 , 2)
            .join()
            .toUpperCase()
}

export default function Instructors() {
  const istructorsList = getAllInstructors()



  return (
    <section className="pad-section">
      <div className="container">
        <div className="stack">
          <div className="section-head">
            <span className="eyebrow">Instructors</span>
            <h2 className="title-page">All instructors</h2>
            <p className="text-muted max-prose">Brows all my courses for web development</p>
          </div>

          <div className="grid-cards">
            {istructorsList.map((instructor) => (
              <Link
                key={instructor.id}
                href={`/instructors/${instructor.slug}`}
                className="card-link"
              >
                <div className="instructor-row">
                  <div className="avatar">{initials(instructor.name)}</div>
                  <div>
                    <h1 className="instructor-card-name">{instructor.name}</h1>
                    <p className="instructor-role">{instructor.specialty}</p>
                  </div>
                </div>

                <p className="instructor-card-bio">{instructor.shortBio}</p>

                <span className="instructor-card-cta">View Profil</span>

              </Link>
            ))}

          </div>





        </div>
      </div>

    </section>
  )
}
