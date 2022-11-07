export default function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      books: [
        {
          name: "리액트",
          author: "장준수",
          secret: true,
          desc: "리액트란? ...",
        },
        {
          name: "리덕스",
          author: "장준수",
          secret: true,
          desc: "리덕스란? ...",
        },
        {
          name: "자바스크립트",
          author: "장준수",
          secret: false,
          desc: "자바스크립트란? ...",
        },
      ],
      search: {},
    };
  }

  const newState = { ...currentState };

  const bookMap = {
    BOOKADD() {
      newState.books.push(action.data);
      newState.search = {};
    },
    BOOKREMOVE() {
      newState.books.splice(action.idx, 1);
    },
    SEARCH() {
      if (
        newState.books.filter((books) => books.name === action.data)[0] !==
        undefined
      ) {
        newState.search = newState.books.filter(
          (books) => books.name === action.data
        )[0];
      } else {
        alert("검색결과가 없습니다.\n문서제목을 정확히 입력해주세요.");
      }
    },
  };

  bookMap[action.type]();

  return newState;
}
