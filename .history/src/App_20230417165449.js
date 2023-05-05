import { BrowserRouter, Router ,} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={ <HomePage/>} />
          <Route></Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
