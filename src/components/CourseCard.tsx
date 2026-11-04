import type { EducationCourse } from '../data/education';

interface CourseCardProps {
  course: EducationCourse;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article aria-labelledby="course-heading" className="section-body border-t border-rule pt-[var(--space-md)]">
      <header className="section-head">
        <p className="eyebrow">
          <time dateTime={course.datetime}>{course.period}</time>
        </p>
        <h3 id="course-heading" className="card-title">
          {course.title}
        </h3>
        <p className="lead measure">{course.field}</p>
        <p className="meta">{course.status}</p>
      </header>
      <div className="section-body">
        <h4 className="text-base font-semibold">{course.school}</h4>
        <p className="meta">{course.acronym}</p>
        <ul role="list" className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {course.focus.map((area) => (
            <li key={area} className="meta">
              {area}
            </li>
          ))}
        </ul>
        <p className="prose measure mt-4">{course.description}</p>
      </div>
    </article>
  );
}

export default CourseCard;
