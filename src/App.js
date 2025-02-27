import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";


const App = () => {
  return (
  <div>
    <NavBar/>
    <UserProfile/>
    <Posts/>
    <Contacts/>
    <p>Hello, world!</p>
  </div>)
};

export default App;
