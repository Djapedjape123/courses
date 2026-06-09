 
import Link from "next/link";

export default function Course() {
  return (
    <section className="pad-section">
      <div className="container">
        <div className="stack">
            <div className="section-head">
                <span className="eyebrow">Courses</span>
                <h2 className="title-page">All courses</h2>
                <p className="text-muted max-prose">Brows all my courses for web development</p>
            </div>

            <div className="stack-md">
              <div className="grid-cards">
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

        </div>
      </div>

    </section>
  )
}
