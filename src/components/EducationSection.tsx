import CourseCard from './CourseCard';
import { EDUCATION_COURSE } from '../data/education';

function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <h2 id="education-heading" className="section-title text-accent">
        Education
      </h2>
      <CourseCard course={EDUCATION_COURSE} />
    </section>
  );
}

export default EducationSection;
