import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/addbook.css";

export default function AddBook() {
  const [bookAddData, setBookAddData] = useState({
    name: "",
    author: "",
    secret: true,
    desc: "",
  });

  const dispatch = useDispatch();

  const changeValue = (e) => {
    const { name, value } = e.target;
    const newValue = { ...bookAddData, [name]: value };

    setBookAddData(newValue);
  };

  return (
    <div className="create">
      <div className="create_title">
        <input
          type="text"
          className="title_input"
          placeholder="제목"
          name="name"
          value={bookAddData.name}
          onChange={changeValue}
        />
        <input
          type="text"
          className="author_input"
          placeholder="저자"
          name="author"
          value={bookAddData.author}
          onChange={changeValue}
        />
        <span className="open">공개여부</span>
        <input
          type="checkbox"
          className="open_check_btn"
          name="secret"
          value={bookAddData.secret}
          onChange={() => {
            setBookAddData({
              ...bookAddData,
              secret: !bookAddData.secret,
            });
          }}
        />
      </div>
      <textarea
        className="desc_text_box"
        name="desc"
        placeholder="책내용을 입력해주세요"
        cols="70"
        rows="20"
        value={bookAddData.desc}
        onChange={changeValue}
      />
      <button
        className="create_btn"
        onClick={() => {
          dispatch({ type: "BOOKADD", data: bookAddData });
          setBookAddData({ name: "", author: "", secret: false, desc: "" });
        }}
      >
        등록
      </button>
    </div>
  );
}
