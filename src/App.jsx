import { useState } from "react";
import './App.css';
import MyButton from "./button";
import NavBar from "./navbar";
import Header from "./header";
import MainContent from "./MainContent";
import Footer from "./footer";

function App() {
  return (
  <div className="">
    <NavBar/>
    <Header/>
    <MainContent/>
    <Footer/>
  </div>
  );
};

export default App
