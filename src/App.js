import React, { createContext, useContext, useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import './App';
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import ItemDetail from "./components/ItemDetail";
import itemList from "./components/fromFirebase/ItemList";
export const StoreContext = createContext(null);
function App() {
const [color,setcolor] = useState ("dark")
const [cart,setcart]= useState([])


  return (
    <StoreContext.Provider value={{cart,setcart}}>
    <div className="App">
      <NavBar color = {color} setcolor={setcolor} cart={cart} setcart={setcart}/> 
      <BrowserRouter>
      <Routes>
        <Route path="/" elemnaent={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />}  />
          <Route path="/item/:itemId" element={<ItemDetail cart={cart} setcart={setcart}/>} />
          <Route path="items" element={<itemList />}  />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
    </StoreContext.Provider>
  );
}

export default App;
