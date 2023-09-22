import BookSearch from "../components/BookSearch";
import Protected from "../components/Protected";

export default function Search() {
  return (
    <Protected>
      <BookSearch />
    </Protected>
  );
}
