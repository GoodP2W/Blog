import "./styles/App.scss";
import "./styles/index.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Project } from "./pages/Projects";

/*Components*/
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          {/* <Route path="/contacts" element={<Contscts />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
