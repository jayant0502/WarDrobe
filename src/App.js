import "./App.css";
import {
  LandingPage,
  EverythingPage,
  WomenPage,
  MenPage,
  AccessoriesPage,
  AboutPage,
  ContactUs,
} from "./Pages/index";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Everything" element={<EverythingPage />} />
        <Route path="/Women" element={<WomenPage />} />
        <Route path="/Men" element={<MenPage />} />
        <Route path="/Accessories" element={<AccessoriesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact_Us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
