import React from "react";
import IngredientsList from "./IngredientsList";
import Instruction from "./Instruction";
import Logo from "../../public/images/smile.png";

const Recipe = ({ name, ingredients, steps }) => {
    let name2= name.toLowerCase().replace(/ /g,'-');
    return (
        <React.StrictMode>
            <section id={name.toLowerCase().replace(/ /g,'-')}>
                <h1>{name}</h1>
                <img src={Logo} alt=""/>
                <img src={`./images/${name2}.jpg`} alt=""/>
                <IngredientsList list={ingredients} />
                <Instruction title="요리방법" steps={steps} />
            </section>
        </React.StrictMode>
    );
}

export default Recipe;
