import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  );
}

export default App;