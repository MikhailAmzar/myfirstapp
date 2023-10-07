import { useState } from "react";
import Clock from "./Clock";

function ClockControl(){

    // const [clockToggle, setClockToggle] = useState("clock on");
    const [clock, setClock] = useState("clock on");

    const [isToggled, setIsToggled] = useState(true);
    //make function to put the setClockToggle
    const clockButtonState = () => {
        if (clock === "clock on"){
            setIsToggled(false);
            setClock ("clock off");
        } else if (clock === "clock off"){
            setIsToggled(true);
            setClock("clock on");
        }
    }
    let showClock;
    if (isToggled){
        showClock = <>
        <button onClick={clockButtonState}>
            Toggle the Clock
        </button>
        <Clock/></>;
    } else {
        showClock = <>
        <button onClick={clockButtonState}>
            Clock toggled
        </button>
        <h1>Clock is turned off</h1>
        </>;
    }

    return (
        <>
        {showClock}
        {/* {clockToggle ? <Clock/> : <h1>Clock turned off</h1>} */}
        </>
    )
}

export default ClockControl;