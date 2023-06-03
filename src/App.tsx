import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "src/shared/NavigationBar";
import "./App.css";
import Home from "src/pages/Home";
import TestDetails from "src/pages/TestDetails";
import Footer from "src/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-details" element={<TestDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
