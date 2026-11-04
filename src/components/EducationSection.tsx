import CourseCard from './CourseCard';
import { EDUCATION_COURSE } from '../data/education';

function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h2 id="education-heading" className="section-title text-accent">
        Education
      </h2>
      <CourseCard course={EDUCATION_COURSE} />
    </section>
  );
}

export default EducationSection;
