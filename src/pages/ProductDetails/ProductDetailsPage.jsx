import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { API_URL } from "../../api";

function getCategoryName(categories, categoryId) {
  const category = categories.find((category) => category.id === categoryId);
  return category ? category.title : "";
}

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((response) => {
        if (response.data.length > 0) {
          setProduct(response.data[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${API_URL}/categories/all`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (!product || categories.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            to: "/",
            label: "Main Page",
            isActive: false,
          },
          {
            to: "/categories",
            label: "Categories",
            isActive: false,
          },
          {
            to: `/categories/${product.categoryId}`,
            label: getCategoryName(categories, product.categoryId),
            isActive: false,
          },
          {
            to: `/products/${productId}`,
            label: product.title,
            isActive: true,
          },
        ]}
      />
      <p>Product Details Page</p>
      <p>Product ID: {productId}</p>
      <pre>
        {JSON.stringify(product, null, 2)}
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  );
}
