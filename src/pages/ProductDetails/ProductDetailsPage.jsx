import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumbs";

function getCategoryName(categories, categoryId) {
  const category = categories.find((category) => category.id === categoryId);
  return category ? category.title : "";
}

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const products = useSelector((state) => state.data.products);
  const categories = useSelector((state) => state.data.categories);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return (
      <div>
        <h2>Error</h2>
        <p>Product not found</p>
      </div>
    );
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
