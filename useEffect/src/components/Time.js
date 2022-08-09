import React,{useEffect, useState} from "react";

export default function Time (props) {

  const [clock, setClock] = useState("00시00분00초");
  const [day, setDay] = useState("0000년00월00일");
  
  useEffect(()=>{
      let time = new Date();
      setDay(time.getFullYear()+"년"+(time.getMonth()+1)+"월"+time.getDate()+"일");
      console.log("날짜가 설정되었습니다.")
  },[props.showTime])

  useEffect(()=> {
    const Timer = setInterval(() => {
      let time = new Date();
      setClock(time.getHours()+"시"+time.getMinutes()+"분"+time.getSeconds()+"초");
    },1000);
    console.log("mount!");
    return ()=>{
       clearInterval(Timer);
       console.log("unmount!")
    }

  },[]);

  return <div>
    <p>{day}</p>
    <p>{clock}</p>
    <p>Time Mount Success!</p>
  </div>
};