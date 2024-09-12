'use client'

import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./login.module.css"
import Link from 'next/link'
import SizedBox from '@/components/SizedBox'
import { useRouter } from 'next/navigation'

function FormLogin() {

    const router = useRouter();

    const handleClickTitle = () => {
        router.push("/")
    }
    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        console.log({ email, password });

    }

    return (
        <div className={style.container}>
            <h1 className={style.title} onClick={handleClickTitle}>Đăng nhập - Her01</h1>
            <form onSubmit={handleSubmitLogin} className={style.form}>
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

                <div className={style.linkFGPassword}>
                    <Link href={"/forget-password"} className={style.link}>Quên mật khẩu?</Link>
                </div>

                <div className={style.button}>
                    <Button>
                        Đăng nhập
                    </Button>
                </div>
                <div className={style.linkRegister}>
                    <Link href={"/register"} className={style.link}>Bạn chưa có tài khoản? Đăng ký</Link>
                </div>
            </form>
        </div>
    )
}

export default FormLogin