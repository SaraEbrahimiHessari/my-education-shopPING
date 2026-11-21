import courses from '../data/courses';
import './Courses.css';
import { Link } from 'react-router-dom';

function formatPrice(price) {
  return new Intl.NumberFormat('fa-IR').format(price);
}

function Courses() {
  return (
    <main className="all-courses" dir="rtl">
      <div className="courses-title">
        <span>آموزش‌های تخصصی</span>
        <h1>همه دوره‌های آموزشی</h1>
        <p>دوره مورد علاقه‌ات رو انتخاب کن و یادگیری رو شروع کن.</p>
      </div>

      <div className="all-course-grid">
        {courses.map((course) => (
          <article className="all-course-card" key={course.id}>
            <div className="all-course-image">
              <div className="all-course-logo">
                {course.logo}
              </div>

              <img
                src={course.image}
                alt={`تصویر دوره ${course.name}`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="all-course-content">
              <h2>{course.name}</h2>
              <h4>{course.subtitle}</h4>
              <p>{course.description}</p>

              <div className="all-course-footer">
                <strong>
                  {formatPrice(course.price)} تومان
                </strong>

                <Link to={`/courses/${course.id}`}>
                  مشاهده دوره <span>←</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Courses