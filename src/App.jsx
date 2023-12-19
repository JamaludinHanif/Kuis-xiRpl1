import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import PilihLevel from "./pages/PilihLevel/PilihLevel";
import Rules from "./pages/Rules/Rules";
import Hasil from "./pages/Hasil/Hasil";
import Kuis from "./pages/Kuis/Kuis";
import About from "./pages/About/About";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/kuis/:level" element={<Kuis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/pilih-level" element={<PilihLevel />} />
          <Route path="/hasil" element={<Hasil />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={< />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
