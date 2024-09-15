'use client'

import React, { ReactElement, useState } from 'react'
import style from "./input.module.css"
import { IconShowPassword } from '@/assets/icons/IconShowPassword';
import { IconHidePassword } from '@/assets/icons/IconHidePassword';

type Props = {
    hintText?: string;
    onChange?: any;
    type?: String;
    size?: String;
    icon?: ReactElement;
    error?: String;
    nameInput?: string;
    px?: number;
    py?: number;
}

function Input({
    hintText = "",
    icon,
    type = "default",
    size = "default",
    error = "",
    nameInput = "",
    onChange,
    px = 36,
    py = 16,
}: Props) {

    const [isShowPassword, setIsShowPassword] = useState(type === "password" ? false : true);

    const handleDisplayPassword = () => {
        setIsShowPassword(i => !i);
    }

    return (
        <>
            <div className={style.container}>
                {icon &&
                    <div className={style.iconInput}>
                        {icon}
                    </div>}
                <input
                    className={`${style.default} ${error ? style.error : ''}`}
                    style={{
                        padding: `${py}px ${px}px`
                    }}
                    placeholder={hintText}
                    onChange={onChange}
                    name={nameInput}
                    type={isShowPassword ? "text" : "password"}
                />
                {type === "password" &&
                    <div className={style.iconDisplayPassword} onClick={handleDisplayPassword}>
                        {isShowPassword ? <IconHidePassword /> : <IconShowPassword />}
                    </div>}
            </div>
            <p className={style.textError}>{error}</p>
        </>
    )
}

export default Input