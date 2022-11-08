import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Add() {
  const [postAddData, setPostAddData] = useState({
    title: "",
    writer: "",
    secret: true,
    desc: "",
  });

  const dispatch = useDispatch();

  const changeValue = (e) => {
    const { name, value } = e.target;
    const newValue = { ...postAddData, [name]: value };

    setPostAddData(newValue);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="제목"
          name="title"
          value={postAddData.title}
          onChange={changeValue}
        />
        <input
          type="text"
          placeholder="글쓴이"
          name="writer"
          value={postAddData.writer}
          onChange={changeValue}
        />
        <span>공개여부</span>
        <input
          type="checkbox"
          name="secret"
          value={postAddData.secret}
          onChange={() => {
            setPostAddData({
              ...postAddData,
              secret: !postAddData.secret,
            });
          }}
        />
      </div>
      <textarea
        name="desc"
        placeholder="내용을 입력해주세요"
        cols="50"
        rows="10"
        value={postAddData.desc}
        onChange={changeValue}
      />
      <button
        onClick={() => {
          dispatch({ type: "POSTADD", data: postAddData });
          setPostAddData({ title: "", writer: "", secret: false, desc: "" });
        }}
      >
        등록
      </button>
    </div>
  );
}
