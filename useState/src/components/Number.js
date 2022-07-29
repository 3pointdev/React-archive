import {useState} from 'react';

function Number() {
  let btnNumber = ["7","8","9","4","5","6","1","2","3","0"];
  let btn = null;
  const [numberValue,setNumberValue] = useState("0");

  for(let i = 0; i < btnNumber.length; i++){
    btn = <>{btn}<button onClick={()=>{
      if(numberValue === "0" || numberValue === "0" && btnNumber[i] === "0"){
        setNumberValue(btnNumber[i]);
      }else{
        setNumberValue(numberValue+btnNumber[i]);
      }
    }}>{btnNumber[i]}</button></>
  }
  btn = <>{btn}<button className='delete' onClick={()=>{
    if(numberValue.length >= 2){
      setNumberValue(numberValue.slice(0,-1));
    }else{
      setNumberValue("0");
    }
  }}>지우기</button></>

  return <div>
    <input className='inputBox' type="text" value={numberValue}></input>
    <div className='numberPad'>{btn}</div>
  </div>
}

export default Number;