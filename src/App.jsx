import "./styles/App.scss";
import "./styles/index.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Pages */
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Auth } from "./pages/Auth";

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
          <Route path="/projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;