import React from "react";
import { useParams } from 'react-router-dom';
const ItemDetail = () => {
const {itemId} = useParams();
console.log (itemId)
return (<>

{itemId}


</>



)

}

export default ItemDetail