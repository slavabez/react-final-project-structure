import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { useRef } from "react";

function calculateNumberOfProductsInCart(cart) {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity = totalQuantity + item.quantity;
  });
  return totalQuantity;
}

export default function Header() {
  const loadingRef = useRef(null);
  const isLoading = useSelector((state) => state.data.isLoading);
  const cart = useSelector((state) => state.cart.items);

  const totalQuantity = calculateNumberOfProductsInCart(cart);

  if (loadingRef.current) {
    if (isLoading) {
      loadingRef.current.continuousStart();
    } else {
      loadingRef.current.complete();
    }
  }

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <LoadingBar color="#0D50FF" ref={loadingRef} />
      <Link to="/">Logo</Link>
      <nav style={{ flexGrow: 1, display: "flex" }}>
        <ul
          style={{
            display: "flex",
          }}
        >
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
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </header>
  );
}
