import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/"/>
          <Route></Route>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
