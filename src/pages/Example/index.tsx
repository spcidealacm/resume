import React from "react";
import Style from "./style.module.scss";

interface ExampleProps {
  // id: number;
  // name: string;
  // email: string;
}

const Example: React.FC<ExampleProps> = ({ }) => {
  return (
    <div className={Style.example}>

    </div>
  );
}

export default Example;