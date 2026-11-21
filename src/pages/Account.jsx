import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Account() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <main
      style={{
        direction: 'rtl',
        minHeight: '65vh',
        padding: '60px 20px',
        background: '#f5f8fc',
      }}
    >
      <div
        style={{
          maxWidth: '650px',
          margin: 'auto',
          padding: '35px',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 30px rgba(15,35,75,0.07)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#142d50' }}>حساب کاربری من</h1>

        <p style={{ color: '#64748b', margin: '25px 0' }}>
          خوش آمدی، {user.username} عزیز!
        </p>

        <Link
          to="/courses"
          style={{
            display: 'inline-block',
            padding: '12px 22px',
            margin: '8px',
            borderRadius: '8px',
            background: '#1765bd',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          مشاهده دوره‌ها
        </Link>

        <button
          onClick={handleLogout}
          style={{
            padding: '12px 22px',
            margin: '8px',
            borderRadius: '8px',
            border: '1px solid #dc3545',
            background: '#fff',
            color: '#dc3545',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          خروج از حساب
        </button>
      </div>
    </main>
  );
}

export default Account;