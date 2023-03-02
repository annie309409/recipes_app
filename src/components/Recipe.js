import React from "react";
import IngredientsList from "./IngredientsList";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
const Recipe = ({ name, ingredients, steps }) => {
    return (
        <React.StrictMode>
            <section id={name.toLowerCase().replace(/ /g,'-')}>
                <h1>{name}</h1>
                <IngredientsList list={ingredients} />
                <Instruction title="요리방법" steps={steps} />
            </section>
        </React.StrictMode>
    );
}

export default Recipe;
