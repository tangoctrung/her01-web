import React, { ReactElement, ReactNode } from 'react'
import style from "./button.module.css"

type Props = {
    children?: ReactNode;
    type?: String;
    size?: String;
    onClick?: any;
    isLoading?: boolean;
}
function Button({
    children,
    type = "default",
    size = "default",
    isLoading = false,
    onClick,
}: Props) {
    return (
        <button
            className={`${style.default} ${isLoading ? style.isLoading : ''}`}
            onClick={onClick}
        >
            {children ?? "Submit"}
        </button>
    )
}

export default Button