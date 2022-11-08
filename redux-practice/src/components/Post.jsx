import { useDispatch, useSelector } from "react-redux";

export default function Post() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ol>
          {state.posts.map((post, idx) => (
            <li key={idx}>
              <span>
                {post.title}-{post.writer}
              </span>
              <button
                onClick={() => {
                  dispatch({ type: "POSTREMOVE", idx: idx });
                }}
              >
                글삭제
              </button>
            </li>
          ))}
        </ol>
      </div>
      {state.search.title !== undefined && (
        <div>
          <div>
            제목 - {state.search.title} / 글쓴이 - {state.search.writer}
          </div>
          <div>
            {state.search.secret
              ? "로그인 후 확인 가능합니다."
              : state.search.desc}
          </div>
        </div>
      )}
    </>
  );
}
