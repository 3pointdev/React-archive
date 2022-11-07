import { useSelector } from "react-redux";
import "../styles/book.css";

export default function Book() {
  const state = useSelector((state) => state);
  return (
    <>
      <div className="book_container">
        <ol className="book_ol">
          {state.books.map((book, idx) => (
            <li key={idx} className="book_list">
              <span>
                {book.author}-[{book.name}]
              </span>
            </li>
          ))}
        </ol>
      </div>
      {state.search.name !== undefined && (
        <div className="desc_container">
          <div className="desc_title">
            검색결과 : 제목 - {state.search.name} / 저자 - {state.search.author}
          </div>
          <div className="desc">
            {state.search.secret
              ? "로그인 후 확인 가능합니다."
              : state.search.desc}
          </div>
        </div>
      )}
    </>
  );
}
