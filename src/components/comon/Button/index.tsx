import React, { ReactNode } from 'react'
import style from "./button.module.css"

type Props = {
    children?: ReactNode;
    type?: String;
    size?: String;
    onClick?: any;
    isLoading?: boolean;
    isDisable?: boolean;
}
function Button({
    children,
    type = "default",
    size = "default",
    isLoading = false,
    isDisable = false,
    onClick,
}: Props) {
    return (
        <button
            className={`${style.default} ${isLoading ? style.isLoading : ''} ${isDisable ? style.isDisable : ''}`}
            onClick={onClick}
        >
            {children ?? "Submit"}
        </button>
    )
}

export default Button