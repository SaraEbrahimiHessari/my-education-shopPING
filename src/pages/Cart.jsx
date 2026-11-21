import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart()

  const formatPrice = (price) =>
    new Intl.NumberFormat('fa-IR').format(price)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page" dir="rtl">
      <div className="cart-container">
        <h1>سبد خرید من</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>سبد خرید شما خالی است!</h2>
            <Link to="/courses">مشاهده دوره‌ها</Link>
          </div>
        ) : (
          <>
            {cart.map((course) => (
              <div className="cart-item" key={course.id}>
                <div className="cart-course-info">
                  <h3>{course.name}</h3>

                  <span>
                    قیمت واحد: {formatPrice(course.price)} تومان
                  </span>

                  <strong>
                    مجموع: {formatPrice(course.price * course.quantity)} تومان
                  </strong>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => increaseQuantity(course.id)}
                    aria-label="افزایش تعداد"
                  >
                    +
                  </button>

                  <strong>{formatPrice(course.quantity)}</strong>

                  <button
                    onClick={() => decreaseQuantity(course.id)}
                    aria-label="کاهش تعداد"
                  >
                    −
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(course.id)}
                >
                  حذف
                </button>
              </div>
            ))}

            <div className="cart-total">
              <span>مبلغ کل:</span>
              <strong>{formatPrice(total)} تومان</strong>
            </div>

            <button className="checkout-button" disabled>
              پرداخت (به‌زودی)
            </button>
          </>
        )}
      </div>
    </main>
  )
}

export default Cart