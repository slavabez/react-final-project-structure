import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    price: 100,
    discountPrice: 120,
    quantity: 2,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://via.placeholder.com/150",
    price: 200,
    discountPrice: 220,
    quantity: 5,
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://via.placeholder.com/150",
    price: 150,
    discountPrice: null,
    quantity: 3,
  },
];

export default function CartPage() {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <p>Cart Page</p>
      {cartItems.length === 0 ? (
        <div>
          <p>Cart is empty</p>
          <Link to="/products">Continue shopping</Link>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                ID: {item.id}, title: {item.title}
              </p>
              <p>
                Price: {item.price}, Quantity: {item.quantity}, Total:{" "}
                {item.price * item.quantity}
              </p>
              {item.discountPrice && (
                <p>Dicounted Price: {item.discountPrice * item.quantity}</p>
              )}
              <button>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}
