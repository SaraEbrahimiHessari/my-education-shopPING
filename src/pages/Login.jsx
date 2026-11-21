import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('لطفاً نام کاربری و رمز عبور را وارد کنید.');
      return;
    }

    login(username.trim(), rememberMe);
    navigate('/account');
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <Link to="/" className="login-logo">
          FRONTCAST
        </Link>

        <h1>ورود به حساب کاربری</h1>
        <p className="login-description">
          برای دسترسی به دوره‌های آموزشی وارد حساب خود شوید.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">نام کاربری یا ایمیل</label>
          <input
            id="username"
            type="text"
            placeholder="نام کاربری یا ایمیل خود را وارد کنید"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">گذرواژه</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="گذرواژه خود را وارد کنید"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'مخفی کردن' : 'نمایش'}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-option">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              مرا به خاطر بسپار
            </label>

            <button
              type="button"
              className="forgot-password"
              onClick={() =>
                alert('بازیابی رمز عبور در نسخه‌های بعدی اضافه می‌شود.')
              }
            >
              فراموشی رمز؟
            </button>
          </div>

          <button type="submit" className="login-submit">
            ورود به حساب
          </button>
        </form>

        <p className="login-footer">
          <Link to="/">بازگشت به صفحه اصلی</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;