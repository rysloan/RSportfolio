import { HashRouter, Routes, Route } from "react-router-dom";
import Ivorfall from "./pages/Ivorfall"
import Main from "./pages/Main"
import Goom from "./pages/Goom"
import PortfolioProj from "./pages/PortfolioProj";
import UserStudyProj from "./pages/UserStudyProj";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Ivorfall" element={<Ivorfall />} />
          <Route path="/Goom" element={<Goom />} />
          <Route path="/PortfolioProject" element={<PortfolioProj />} />
          <Route path="/UserStudyProj" element={<UserStudyProj />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
