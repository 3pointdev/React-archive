import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Find() {
  const dispatch = useDispatch();
  const [postName, setPostName] = useState("");

  const formEvent = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", data: postName });
  };

  return (
    <form onSubmit={formEvent}>
      <input
        type="text"
        placeholder="검색"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
      />
      <input type="submit" value="검색" />
    </form>
  );
}
