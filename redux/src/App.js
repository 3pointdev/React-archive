import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import "./App.css";

function reduce(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 0,
    };
  }

  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

const Store = createStore(reduce);

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Provider store={Store}>
        <Calculator1 />
        <Result1 />
      </Provider>
    </div>
  );
}

function Calculator1() {
  return (
    <div>
      <h1>Calculator1</h1>
      <Calculator2 />
    </div>
  );
}

function Calculator2() {
  return (
    <div>
      <h1>Calculator2</h1>
      <Calculator3 />
    </div>
  );
}

function Calculator3() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Calculator3</h1>
      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        더하기
      </button>
    </div>
  );
}

function Result1() {
  return (
    <div>
      <h1>Result1</h1>
      <Result2 />
    </div>
  );
}

function Result2() {
  return (
    <div>
      <h1>Result2</h1>
      <Result3 />
    </div>
  );
}

function Result3() {
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Result3</h1>
      number : {number}
    </div>
  );
}
