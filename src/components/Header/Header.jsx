import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import styles from "./Header.module.css";

function calculateNumberOfProductsInCart(cart) {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;
  });
  return totalQuantity;
}

export default function Header() {
  const burgerRef = useRef(null);
  const cart = useSelector((state) => state.cart.items);
  const location = useLocation();

  const totalQuantity = calculateNumberOfProductsInCart(cart);

  useEffect(() => {
    burgerRef.current.checked = false;
  }, [location]);

  return (
    <header className={styles.Header}>
      <Link to="/">Logo</Link>
      <nav>
        <ul className={styles.HeaderNav}>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.RightSection}>
        <Link to="/cart">Cart ({totalQuantity})</Link>
        <input
          ref={burgerRef}
          className={styles.BurgerCheckbox}
          type="checkbox"
          id="mobile-menu"
        />
        <label htmlFor="mobile-menu" className={styles.BurgerIcon}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </label>
        <ul className={styles.MobileMenu}>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
