import { useDispatch } from "react-redux";
import { openAndCloseModal } from "../../redux/modalSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Home Page</p>
      <button
        onClick={() => {
          dispatch(openAndCloseModal({ title: "Title", content: "Content" }));
        }}
      >
        Show modal
      </button>
    </div>
  );
}
