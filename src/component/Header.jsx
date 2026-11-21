import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useAuth();
  const { cart } = useCart();

  const closeMenu = () => setMenuOpen(false);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const accountLink = user ? '/account' : '/login';

  return (
    <header className="header">
      <Link className="brand" to="/" onClick={closeMenu}>
        FRONT<span>CAST</span>
      </Link>

      <nav className="nav">
        <Link to="/">صفحه اصلی</Link>
        <Link to="/courses">دوره‌های آموزشی</Link>
        <Link to={accountLink}>حساب کاربری</Link>

        <Link to="/cart" className="header-cart-link">
          سبد خرید
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </Link>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="باز و بسته کردن منو"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <nav
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-menu" onClick={closeMenu}>
              ×
            </button>

            <Link to={accountLink} onClick={closeMenu}>
              حساب کاربری
            </Link>

            <Link to="/courses" onClick={closeMenu}>
              دوره‌های آموزشی
            </Link>

            <Link to="/cart" onClick={closeMenu}>
              سبد خرید
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header