import { useEffect, useRef, useState } from "react";

const formatTime = (time) =>{
    let days = Math.floor(time / (24 * 60 * 60));
    let hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((time % (60 * 60)) / 60);
    let seconds = Math.floor(time % 60);

    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // return `
    // ${days} days :  
    // ${hours} hours : 
    // ${minutes} minutes  :  
    // ${seconds} seconds`;
    return { days, hours, minutes, seconds };
};
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
    const { days, hours, minutes, seconds: secs } = formatTime(countdown);
    return (
        <div>
             {/* <h1 className="text-3xl roboto text-dark"> {formatTime(countdown)} </h1> */}
             <h1 className="text-xl roboto text-dark"> 
                <span className="text-3xl protest"> {days} </span>
                Days
                <span className="text-3xl protest"> {hours} </span>
                Hours <br className="block md:hidden" />
                <span className="text-3xl protest"> {minutes} </span>
                Minutes
                <span className="text-3xl protest"> {secs} </span>
                Seconds
                </h1>
        </div>
    );
};

export default CountDown;