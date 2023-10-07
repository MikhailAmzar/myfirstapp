import React, {useState, useEffect} from "react";

function Clock (){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Component updated");
        const interval = setInterval(showDate,1000);

        return ()=>{
            console.log("Cleaned Interval");
            clearInterval(interval);
        }
    
    }, [time]);


    function showDate(){
        // console.log(new Date().toString());
        setTime(new Date().toLocaleTimeString());
    }

    return (
    <div><h1>Time Now:<br/>{time}</h1></div>
    )
    //Assignment 4 : return to ClockControl.js
}




export default Clock;