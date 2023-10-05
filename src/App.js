import logo from './logo.svg';
import './App.css';


function App() {
  function formatUser(user){
    return user.firstName + " " + user.lastName;
  };

  function getGreeting(user) {
    if(user){
      return <h1>Hello, {formatUser(user)}</h1>
    }
    return <h1>Hello, Stranger</h1>
  }
  const user = {
    firstName: "Mikha",
    lastName: "Amzar"
  };
  
  const name = "Mikhail Amzar"
  // const element = <h1>Hello, World</h1>
  return <div>{getGreeting(user)}</div>;
}

export default App;
