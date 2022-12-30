import React from "react";
import "../App.css"
const Card = (props) => {
    console.log(props);
    return (<>

        <div className="card">
            <div className="img">
                <img src={props.image} alt={props.name} />
            </div>

            <div className="price">
                <p> ${props.price}</p>
            </div>

            <div className="name">
                <h1>
                {props.name}
                </h1>
            </div>
            <div className="buybutton">
                <a href={`/item/${props.id}`}> Ver Producto </a>
            </div>
        </div>

    </>

    )

}

export default Card