import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';
import { Dashboard } from "@mui/icons-material";
import D


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
