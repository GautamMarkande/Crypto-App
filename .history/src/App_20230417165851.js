import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path=""></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
