import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";

function App() {
  const history = useHistory();
  const location = useLocation();
  console.log({ history });
  console.log({ location });
  location.state = "hello";

  return (
    <div className="App">
      <Navbar />
      {/* <Switch> */}
      <Route path="/" exact component={Home} />
      <Route path="/about" render={() => <About></About>}></Route>
      <Route path="/portfolio" children={() => <Portfolio></Portfolio>} />
      <Route path="/contact" children={() => <Contact></Contact>} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
