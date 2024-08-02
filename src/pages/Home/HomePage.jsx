import { useDispatch } from "react-redux";
import { openAndCloseModal } from "../../redux/modalSlice";
import Title from "../../components/Title/Title";

export default function HomePage() {
  const dispatch = useDispatch();
  return (
    <div>
      <Title className="Hello" tag="h2" style={{ color: "red" }}>
        Home Page
      </Title>
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
