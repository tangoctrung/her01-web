import { SVGProps } from "react";
import style from "./icon.module.css";

export function IconAddFile(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em" height="1em" viewBox="0 0 24 24"
            className={style.content}
            {...props}>
            <path fill="currentColor" d="M16 11V6h2v5zm-5 6.9q-.875-.25-1.437-.975T9 15.25V6h2zm.75 4.1q-2.6 0-4.425-1.825T5.5 15.75V6.5q0-1.875 1.313-3.187T10 2t3.188 1.313T14.5 6.5V14h-2V6.5q-.025-1.05-.737-1.775T10 4t-1.775.725T7.5 6.5v9.25q-.025 1.775 1.225 3.013T11.75 20q.625 0 1.188-.162T14 19.35v2.225q-.525.2-1.088.313T11.75 22M16 21v-3h-3v-2h3v-3h2v3h3v2h-3v3z">
            </path>
        </svg>
    )
}