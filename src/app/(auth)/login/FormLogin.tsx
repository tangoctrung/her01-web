'use client'

import React, { FormEvent } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./login.module.css"

function FormLogin() {

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        console.log({ email, password });

    }

    return (
        <form onSubmit={handleSubmitLogin} className={style.form}>
            <Input
                hintText='Nhập email của bạn...'
                icon={<IconEmail height={24} width={24} />}
                nameInput='email'
            />
            <Input
                hintText='Nhập mật khẩu của bạn...'
                icon={<IconPassword height={24} width={24} />}
                nameInput='password'
                type={"password"}
            />
            <div className={style.button}>
                <Button>
                    Đăng nhập
                </Button>
            </div>
        </form>
    )
}

export default FormLogin