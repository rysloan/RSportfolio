import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ivorfall from "./pages/Ivorfall"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/Ivorfall">
            <Navbar />
            <Ivorfall />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
