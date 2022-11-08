export default function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      posts: [
        {
          title: "리액트",
          writer: "홍길동",
          secret: true,
          desc: "리액트란? ...",
        },
        {
          title: "리덕스",
          writer: "홍길동",
          secret: true,
          desc: "리덕스란? ...",
        },
        {
          title: "자바스크립트",
          writer: "홍길동",
          secret: false,
          desc: "자바스크립트란? ...",
        },
      ],
      search: {},
    };
  }

  const newState = { ...currentState };

  const postMap = {
    POSTADD() {
      newState.posts.push(action.data);
      newState.search = {};
    },
    POSTREMOVE() {
      newState.posts.splice(action.idx, 1);
    },
    SEARCH() {
      if (
        newState.posts.filter((posts) => posts.title === action.data)[0] !==
        undefined
      ) {
        newState.search = newState.posts.filter(
          (posts) => posts.title === action.data
        )[0];
      } else {
        alert("검색결과가 없습니다.\n글제목을 정확히 입력해주세요.");
      }
    },
  };

  postMap[action.type]();

  return newState;
}
