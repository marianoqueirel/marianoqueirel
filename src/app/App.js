import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => (
  <div className="container">
    <header className="header">
      <Header />
    </header>
    <main className="main">
      <Main />
    </main>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default App;
