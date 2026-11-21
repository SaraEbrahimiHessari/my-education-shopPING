import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import courses from './data/courses';
import './App.css';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Account from './pages/Account';

function Home() {
  return (
    <main className="home" dir="rtl">
      <section className="hero">
        <h1>برنامه‌نویسی به زبان ساده</h1>
        <p>
          با دوره‌های تخصصی، مهارت‌های برنامه‌نویسی خودت رو ارتقا بده.
        </p>
        <Link to="/courses" className="hero-button">
          مشاهده دوره‌ها
        </Link>
      </section>

      <section className="home-courses" id="courses">

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="home-course-image">
                <img
                  src={course.image}
                  alt={`تصویر دوره ${course.name}`}
                />
              </div>

              <div className="home-course-content">
                <h3>{course.name}</h3>

                <p>{course.subtitle}</p>

                <strong>
                  {new Intl.NumberFormat('fa-IR').format(course.price)} تومان
                </strong>

                <Link to={`/courses/${course.id}`}>
                  مشاهده دوره
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="announcement">
            آموزش برنامه‌نویسی با جدیدترین دوره‌های تخصصی
          </div>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;