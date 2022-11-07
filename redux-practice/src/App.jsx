import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import AddBook from "./components/AddBook";
import Book from "./components/Book";
import FindBook from "./components/Find";
import reducer from "./Store";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FindBook />
        <Book />
        <AddBook />
      </Provider>
    </div>
  );
}

export default App;
