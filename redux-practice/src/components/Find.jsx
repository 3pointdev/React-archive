import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/find.css";

export default function FindBook() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState("");

  const formEvent = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", data: bookName });
  };

  return (
    <form className="search_form" onSubmit={formEvent}>
      <input
        type="text"
        placeholder="검색"
        className="search_text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input type="submit" className="search_submit" value="검색" />
    </form>
  );
}
