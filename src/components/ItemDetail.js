import React, {useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import "../App.css"
const ItemDetail = ({cart,setcart}) => {
const {itemId} = useParams();
const [product, setProduct] = useState([])
console.log (itemId)
const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

function getProduct() {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then(res=>res.json())
    .then(r => setProduct(r))
    .then(json=>console.log(json))
}
 useEffect(()=>{
getProduct()
},[])


return (<>


<div className="contedenorProduct"> 
<div className="left">
    <img src={product.image}/>
</div>
<div className="right">
    <div className="category">
        <p> {product.category}</p>
    </div>
    <div className="title">
        <h1> {product.title}</h1>
    </div>

<div className="description">
    <p> {product.description}</p>
</div>
<div className="price">
    <p>{ formatter.format(product.price)} </p>
</div>
<div className="buybutton">
    <button onClick={() => setcart([
        ...cart, {
            name:product.title,
            price: product.price,
            image: product.image,
        }
    ])}>
        Agregar al carrito
    </button>
</div>
</div>

 </div>


</>



)

}

export default ItemDetail