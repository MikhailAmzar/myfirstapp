import { useState } from "react";

function LoginControl(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () =>{
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () =>{
        setIsLoggedIn(false);
    };
    
    let button;
    if (isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
    } else {
        button = <LoginButton onClick={handleLoginClick}/>
    }
    return (
        <div>
            {button}
        </div>
    )
}

//Component in samefile for Login and Logout button
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}
export default LoginControl;