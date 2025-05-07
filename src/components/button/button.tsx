import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}