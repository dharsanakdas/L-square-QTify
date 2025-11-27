import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* Navigation with NavLink for active styling */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
