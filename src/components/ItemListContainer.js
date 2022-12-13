import React, {useEffect, useState} from "react";
import Card from "./Card";


const ItemListConteiner = () => {
    const [ products, setProducts]= useState([])
function getProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(r => setProducts (r))
    .then(json=>console.log(json))
}
 useEffect(()=>{
getProducts()
},[])
console.log(products)

    return (<>
    
    {
        products.map(product => <Card key={product.id} name={product.title} image={product.image}
        price={product.price} id={product.id}
        
        />)

    
    }
    
    
    </>)
}
export default ItemListConteiner

