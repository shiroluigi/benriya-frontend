"use client";

import { JSX } from "react/jsx-runtime";

interface ButtonProps {
    style?: string,
    size?: number,
    text?: string,
}

const Button = (props: ButtonProps ):JSX.Element => {
    return (
    <div className="button">
      <button>{props.text || "Button"}</button>  
    </div>
    );
};


export default Button;