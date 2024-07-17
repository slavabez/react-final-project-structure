import { useParams } from "react-router-dom";

export default function ProductsByCategoryPage() {
  const { categoryId } = useParams();

  return (
    <div>
      <p>Products By Category Page</p>
      <p>Category ID: {categoryId}</p>
    </div>
  );
}
