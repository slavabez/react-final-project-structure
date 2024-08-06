import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../components/Button/Button";
import { addToCart } from "../../../redux/cartSlice";
import { API_URL } from "../../../api";
import ProductContainer from "../../../components/ProductContainer/ProductContainer";

export default function AllProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === "checkbox" ? checked : value);
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (minPrice && product.price < Number(minPrice)) {
      return false;
    }
    if (maxPrice && product.price > Number(maxPrice)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <p>All Products Page</p>

      <label>
        Min price
        <input
          name="minPrice"
          type="number"
          value={searchParams.get("minPrice") || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Max price
        <input
          name="maxPrice"
          type="number"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Include discount
        <input
          name="includeDiscount"
          type="checkbox"
          onChange={handleChange}
          checked={searchParams.get("includeDiscount") === "true"}
        />
      </label>
      <label>
        Sort type
        <select
          name="sortType"
          value={searchParams.get("sortType") || "default"}
          onChange={handleChange}
        >
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="priceHighToLow">price: high-low</option>
          <option value="priceLowToHigh">price: low-high</option>
        </select>
      </label>
      <ProductContainer products={filteredProducts} />
    </div>
  );
}
