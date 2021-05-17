import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
