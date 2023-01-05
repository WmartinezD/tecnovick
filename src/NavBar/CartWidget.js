import React, {useContext} from "react";
import { StoreContext } from "../App"
const CartWidget = () => {
    const context=  useContext(StoreContext)
    console.log ("context",context)
    return <h1> Cart <span> ({context.cart.length})</span></h1>
}
export default CartWidget 