import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Plans from "./components/Plans/Plans";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
