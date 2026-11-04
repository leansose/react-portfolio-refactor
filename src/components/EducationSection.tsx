import CourseCard from './CourseCard';
import { EDUCATION_COURSE } from '../data/education';

function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <CourseCard course={EDUCATION_COURSE} />
    </section>
  );
}

export default EducationSection;
