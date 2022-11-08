import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Add from "./components/Add";
import Post from "./components/Post";
import Find from "./components/Find";
import reducer from "./Store";

const store = createStore(reducer);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Find />
        <Post />
        <Add />
      </Provider>
    </div>
  );
}
