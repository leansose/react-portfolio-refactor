import CourseCard from './CourseCard';
import { EDUCATION_COURSE } from '../data/education';

function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="education-heading" className="section-title">
          Education
        </h2>
      </div>
      <CourseCard course={EDUCATION_COURSE} />
    </section>
  );
}

export default EducationSection;
