
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import './App';
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" elemnaent={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="/item/:itemId" element={<ItemDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
