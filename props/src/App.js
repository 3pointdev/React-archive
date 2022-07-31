import './App.css';
import {useState} from 'react';
import Components from './components/Components'

function App() {

const [count,setCount] = useState(0);

function onClickHandler () {
  setCount(count + 1);
}

  return <>
    <button onClick={onClickHandler}>+1</button>
    <Components count={count}/>
  </>
}

export default App;
