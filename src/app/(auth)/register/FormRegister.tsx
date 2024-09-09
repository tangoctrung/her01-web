'use client'

import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./register.module.css"
import Link from 'next/link'
import SizedBox from '@/components/SizedBox'

function FormRegister() {

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;

        console.log({ displayName, email, password, confirmPassword });

    }

    return (
        <form onSubmit={handleSubmitLogin} className={style.form}>
            <Input
                hintText='Nhập tên của bạn...'
                icon={<IconEmail height={24} width={24} />}
                nameInput='displayName'
            />
            <SizedBox height={8} />
            <Input
                hintText='Nhập email của bạn...'
                icon={<IconEmail height={24} width={24} />}
                nameInput='email'
            />
            <SizedBox height={8} />
            <Input
                hintText='Nhập mật khẩu của bạn...'
                icon={<IconPassword height={24} width={24} />}
                nameInput='password'
                type={"password"}
            />
            <SizedBox height={8} />
            <Input
                hintText='Nhập lại mật khẩu'
                icon={<IconPassword height={24} width={24} />}
                nameInput='confirmPassword'
                type={"password"}
            />
            <SizedBox height={8} />
            <div className={style.button}>
                <Button>
                    Đăng ký
                </Button>
            </div>
            <div className={style.linkRegister}>
                <Link href={"/login"} className={style.link}>Bạn đã có tài khoản? Đăng nhập</Link>
            </div>
        </form>
    )
}

export default FormRegister