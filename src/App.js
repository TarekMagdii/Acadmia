import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Header from "./Components/common/header/Header";
import CourseHome from "./Components/allcourses/CourseHome";
import Team from "./Components/team/Team";
import Price from "./Components/pricing/Price";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/common/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pricing" component={Price} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
