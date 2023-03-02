import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes_ko.json";

ReactDOM.render(
    <React.StrictMode>
        <Menu recipes={data} />
    </React.StrictMode>
    , document.getElementById("root"));