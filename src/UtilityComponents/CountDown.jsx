import { useEffect, useRef, useState } from "react";

const formatTime = (time) =>{
    let minutes = Math.floor(time/60)
    let seconds = Math.floor(time - minutes*60)
    if(minutes <= 10) minutes = '0' + minutes;
    if(seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds
}
const CountDown =({seconds}) => {
    const [countdown,setCountdown] = useState(seconds)
    const timerId = useRef()
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setCountdown(prev=>prev-1)
        },1000)
        return () => clearInterval(timerId.current)
    },[])
    useEffect(()=>{
        if(countdown <= 0){
            clearInterval(timerId.current)
            alert("Time Over")
        }

    },[countdown])
    return (
        <div>
             <h1 className="text-3xl roboto text-dark"> {countdown} </h1>
        </div>
    );
};

export default CountDown;