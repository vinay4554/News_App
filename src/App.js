import react, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/App.scss"
import {Newsaction} from "./actions/Newsaction";
import Topheadlines from "./components/Topheadlines";
import About from "./components/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Everyheadline from "./components/Everyheadline";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  const[display,setDisplay]=useState(false)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(Newsaction());
    },[])
  return (
    <div className="App">
    <Header display={display} setDisplay={setDisplay}/>
      <Router>
      {display &&  <Nav display={display} setDisplay={setDisplay}/>}
      <Switch>
        <Route path="/" exact component={Topheadlines} />
        <Route path="/Everyheadline" component={Everyheadline} />
        <Route path="/About" component={About} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
