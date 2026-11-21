import { useParams, Link, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import './CourseDetails.css'
import { useCart } from '../context/CartContext'

function formatPrice(price) {
  return new Intl.NumberFormat('fa-IR').format(price)
}

function CourseDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const course = courses.find(
    (item) => item.id === Number(id)
  )

  if (!course) {
    return (
      <main className="course-not-found" dir="rtl">
        <h2>دوره مورد نظر پیدا نشد!</h2>
        <Link to="/courses">بازگشت به دوره‌ها</Link>
      </main>
    )
  }

  return (
    <main className="course-details" dir="rtl">
      <div className="details-container">

        <div className="details-image">
          <img
            src={course.image}
            alt={`تصویر دوره ${course.name}`}
          />
        </div>

        <span className="details-label">
          دوره آموزشی تخصصی
        </span>

        <h1>{course.name}</h1>

        <h2>{course.subtitle}</h2>

        <p className="details-description">
          {course.description}
        </p>

        <div className="details-info">
          <div>
            <span>قیمت دوره</span>
            <strong>{formatPrice(course.price)} تومان</strong>
          </div>

          <div>
            <span>تعداد دانشجویان</span>
            <strong>به‌زودی</strong>
          </div>

          <div>
            <span>وضعیت برگزاری</span>
            <strong>در حال برگزاری</strong>
          </div>

          <div>
            <span>وضعیت پنل کاربران</span>
            <strong>فعال</strong>
          </div>
        </div>

        <button
          className="register-button"
          onClick={() => {
            addToCart(course)
            navigate('/cart')
          }}
        >
          ثبت‌نام در دوره
        </button>

        <Link to="/courses" className="back-to-courses">
          بازگشت به همه دوره‌ها
        </Link>

      </div>
    </main>
  )
}

export default CourseDetails