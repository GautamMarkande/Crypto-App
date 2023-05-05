import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';
import { Dashboard } from "./pages/Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Ro path="/Dashboard" element={<Dashboard />}></Ro
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
