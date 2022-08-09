import React,{useState} from 'react';
import Time from './components/Time'

function App() {
  const [showTime,setShowTime] = useState(false);

  return <div>
    {showTime && <Time showTime={showTime}/>}
    <button onClick={()=>{setShowTime(!showTime)}}>Time Toggle</button>
  </div>
}

export default App;