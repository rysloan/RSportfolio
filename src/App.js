import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ivorfall from "./pages/Ivorfall"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
            <Footer />
          </Route>
          <Route path="/Ivorfall">
            <Navbar />
            <Ivorfall />
            <Footer />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
