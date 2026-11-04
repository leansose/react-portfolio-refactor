import type { EducationCourse } from '../data/education';

interface CourseCardProps {
  course: EducationCourse;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article aria-labelledby="course-heading">
      <header>
        <p>
          <time dateTime={course.datetime}>{course.period}</time>
        </p>
        <h3 id="course-heading">{course.title}</h3>
        <p>{course.field}</p>
        <p>{course.status}</p>
      </header>
      <h4>{course.school}</h4>
      <p>{course.acronym}</p>
      <ul>
        {course.focus.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
      <p>{course.description}</p>
    </article>
  );
}

export default CourseCard;
