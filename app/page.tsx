import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="container pad-hero">
         <span className="hero-pill">Build ,Learn,Procres</span>
         <h1 className="hero-title">practical courses for a web development</h1>
         <p className="hero-lede">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quos!</p>

        <div className="hero-actions">
          <Link href="/courses" className="btn btn-primary">
            View Courses
          </Link>

        </div>
      </div>
    </section>
  );
}
