import { SVGProps } from "react";
import style from "./icon.module.css";

export function IconUsername(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em" height="1em" viewBox="0 0 512 512"
            className={style.content}
            {...props}
        >
            <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor">
            </path>
        </svg>
    )
}
