import { BrowserRouter, Router, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={<HomePage/>} />
          <Route></Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
