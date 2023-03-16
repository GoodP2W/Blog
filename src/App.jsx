/*styles */
import "./styles/global.scss";

/*react router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Pages */
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Auth } from "./pages/Auth";

/*Components*/
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Registration } from "./components/auth/register/Register";
import { Profile } from "./components/profiles/Profiles";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
