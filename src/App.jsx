import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import DynamicPage from "./pages/contactPage/components/DynamicPage";
import TestPage from "./pages/TestPage/TestPage";
// import MainPage from "./pages/MainPage";
import Navbar from "./pages/components/Navbar";

//pages
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/me/:hi" element={<DynamicPage />} />
          <Route path="/test/:lose" element={<TestPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
