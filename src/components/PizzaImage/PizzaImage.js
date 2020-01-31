import React from "react";
import classes from "./PizzaImage.css";
import PizzaImage from "../../assets/pizza.jpg";

const pizzaImage = () => {
    return (
        <div>
            <img src={PizzaImage} />
            <h1>hehe</h1>
        </div>
    )

}

export default pizzaImage;