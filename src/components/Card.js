 import React from "react";
const Card = ( props) => {
    console.log (props);
return (<>

<div className="img">
<img src= {props.image} alt = {props.name}/>

</div>
<div> 
    <p> ${props.price}</p>
</div>

 <div>{props.name}</div>

 <div> 
    <a href= { `/item/${props.id}`}> Ver Producto </a>
 </div>
 
 </>

)

}

export default Card