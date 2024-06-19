import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import { HashRouter, Routes, Route } from "react-router-dom";
import Ivorfall from "./pages/Ivorfall"
import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Ivorfall" element={<Ivorfall />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
