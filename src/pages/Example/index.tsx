import React from "react";
import Style from "./style.module.scss";

interface ExampleProps{
    id: number;
    name: string;
    email: string;
}

const Example: React.FC<ExampleProps>  = ({id, name, email}) =>{
    return (
        <li className={Style.example}>
            <img src="" alt={id.toString()}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    );
}

export default Example;