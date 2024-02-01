import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes here */}
      </Routes>
    </BrowserRouter>
    


  );
}
export default App;