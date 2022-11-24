import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import './App.css';
import Home from "./pages/Home"
import Productos from "./pages/Productos"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" elemnaent={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
