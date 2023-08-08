import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [navState, setnavState] = useState(true);

  function changeState(nav) {
    setnavState(nav);
    console.log(navState);
  }

  return (
    <div className="App overflow-x-hidden">
      <>
        <Navbar changeState={changeState}></Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About navState = {navState}/>}></Route>
          <Route exact path="/Resume" element={<Resume navState = {navState}/>}></Route>
          <Route exact path="/Project" element={<Project navState = {navState}/>}></Route>
          <Route exact path="/Contact" element={<Contact navState = {navState}/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
