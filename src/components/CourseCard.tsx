import type { EducationCourse } from '../data/education';

interface CourseCardProps {
  course: EducationCourse;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article aria-labelledby="course-heading" className="mt-8 border-t border-rule pt-6">
      <header>
        <p className="eyebrow">
          <time dateTime={course.datetime}>{course.period}</time>
        </p>
        <h3 id="course-heading" className="card-title mt-2">
          {course.title}
        </h3>
        <p className="lead measure mt-2">{course.field}</p>
        <p className="meta mt-1">{course.status}</p>
      </header>
      <h4 className="mt-4 text-base font-semibold">{course.school}</h4>
      <p className="meta">{course.acronym}</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {course.focus.map((area) => (
          <li key={area} className="meta">
            {area}
          </li>
        ))}
      </ul>
      <p className="prose measure mt-4">{course.description}</p>
    </article>
  );
}

export default CourseCard;
