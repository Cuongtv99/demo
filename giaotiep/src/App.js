import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import SignUp from "./components/pages/SignUp";
import Register from "./components/pages/Register";
import Contact from "./components/pages/Contact";
import Progess from "./components/pages/Progess";
import TrainingPage from "./components/pages/TrainingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={TrainingPage} />
          <Route path="/courses" component={Courses} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/register" component={Register} />
          <Route path="/news" component={Contact} />
          <Route path="/progess" component={Progess} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
