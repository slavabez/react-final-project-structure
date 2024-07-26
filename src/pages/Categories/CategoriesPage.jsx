import { Link } from "react-router-dom";

const categories = [];

export default function CategoriesPage() {
  return (
    <div>
      <p>Categories Page</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
