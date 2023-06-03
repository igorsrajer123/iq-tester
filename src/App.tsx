import { BrowserRouter, Routes } from "react-router-dom";
import NavigationBar from "src/shared/NavigationBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
