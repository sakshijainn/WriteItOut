import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home"><Home/></Route>
          <Route path="/">
            {" "}
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
