 
import Link from "next/link";
import CoursesCatalogClinet from "./courses-catalog-clinet";
import { getAllCourses, getCourseCategories } from "@/lib/data";

export default function Course() {

    const courses = getAllCourses();

    const category = getCourseCategories();



  return (
    <section className="pad-section">
      <div className="container">
        <div className="stack">
            <div className="section-head">
                <span className="eyebrow">Courses</span>
                <h2 className="title-page">All courses</h2>
                <p className="text-muted max-prose">Brows all my courses for web development</p>
            </div>

            <CoursesCatalogClinet courses={courses}
              category={category}
            />

        </div>
      </div>

    </section>
  )
}
