import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Dry & Wet Food",
  },
  {
    id: 2,
    name: "Litter Boxes & Litter Trays",
  },
  {
    id: 3,
    name: "Baskets & Beds",
  },
  {
    id: 4,
    name: "Scratching Posts",
  },
  {
    id: 5,
    name: "Toys",
  },
  {
    id: 6,
    name: "Collars & Leashes",
  },
  {
    id: 7,
    name: "Carriers & Transport",
  },
  {
    id: 8,
    name: "Bowls & Feeders",
  },
  {
    id: 9,
    name: "Grooming",
  },
  {
    id: 10,
    name: "Health & Hygiene",
  },
  {
    id: 11,
    name: "Accessories",
  },
  {
    id: 12,
    name: "Training",
  },
  {
    id: 13,
    name: "Gifts",
  },
  {
    id: 14,
    name: "New Arrivals",
  },
  {
    id: 15,
    name: "Sale",
  },
];

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
