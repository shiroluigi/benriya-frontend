"use client";

import { useState } from "react";

interface InputFieldProps {
    placeholder?: string;
    color?: string;
    type?: string;
    disabled?: boolean;
}

const InputField = (props: InputFieldProps) => {

    const [passwordShow, setPasswordShow] = useState(false);

    const showPassword = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setPasswordShow(true);
    };
    const hidePassword = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setPasswordShow(false);
    };


    return (
        <div className="InputField">
            {passwordShow && props.type === "password" ?
                <input
                    className="input-field"
                    placeholder={props.placeholder}
                    style={{ color: props.color }}
                    disabled={props.disabled}
                    type="text"
                />
                :
                <input
                    className="input-field"
                    placeholder={props.placeholder}
                    style={{ color: props.color }}
                    disabled={props.disabled}
                    type={props.type}
                />
            }
            {props.type === "password" ? <button className="eye" onMouseDown={showPassword} onMouseUp={hidePassword}>Show</button> : <></>}
        </div>
    );
};

export default InputField;