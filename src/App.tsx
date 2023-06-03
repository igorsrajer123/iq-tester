import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Typography, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "src/styles/Themes";
import "./App.css";

import Home from "src/pages/Home";
import TestDetails from "src/pages/TestDetails";

import NavigationBar from "src/shared/NavigationBar";
import Footer from "src/shared/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-details" element={<TestDetails />} />
          <Route
            path="*"
            element={
              <Typography variant="h3" fontWeight={700} textAlign="center">
                Not found!
              </Typography>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
