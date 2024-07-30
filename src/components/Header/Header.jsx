import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Header() {
  const loadingRef = useRef(null);
  const isLoading = useSelector((state) => state.data.isLoading);

  if (loadingRef.current) {
    if (isLoading) {
      loadingRef.current.continuousStart();
    } else {
      loadingRef.current.complete();
    }
  }

  return (
    <header>
      <LoadingBar color="#0D50FF" ref={loadingRef} />
      <Link to="/">Logo</Link>
      <nav>
        <ul>
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
      <Link to="/cart">Cart</Link>
    </header>
  );
}
