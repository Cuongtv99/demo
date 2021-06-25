import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Service from "./components/pages/Services";
import Courses from "./components/pages/Courses";
import SignUp from "./components/pages/SignUp";
import Register from "./components/pages/Register";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/courses" component={Courses} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
