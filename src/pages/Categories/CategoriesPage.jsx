import { Link } from "react-router-dom";

export default function CategoriesPage() {
  return (
    <div>
      <p>Categories Page</p>
      <ul>
        <li>
          <Link to="/categories/1">Category 1</Link>
        </li>
        <li>
          <Link to="/categories/2">Category 2</Link>
        </li>
        <li>
          <Link to="/categories/3">Category 3</Link>
        </li>
      </ul>
    </div>
  );
}
