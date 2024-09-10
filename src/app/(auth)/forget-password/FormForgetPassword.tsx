'use client'

import React, { useState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./forget-password.module.css"
import Link from 'next/link'
import SizedBox from '@/components/SizedBox'

function FormForgetPassword() {

    const [step, setStep] = useState<"email" | "code" | "password">("password")

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        console.log({ email, password });

    }

    return (
        <form onSubmit={handleSubmitLogin} className={style.form}>
            {step === "email" &&
                <Input
                    hintText='Nhập email của bạn...'
                    icon={<IconEmail height={24} width={24} />}
                    nameInput='email'
                />}
            {step === "code" &&
                <Input
                    hintText='Nhập mã của bạn...'
                    icon={<IconEmail height={24} width={24} />}
                    nameInput='email'
                />}
            {step === "password" &&
                <>
                    <Input
                        hintText='Nhập mật khẩu mới của bạn...'
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
                </>
            }
            <SizedBox height={8} />
            <div className={style.button}>
                <Button>
                    Tiếp tục
                </Button>
            </div>
            <div className={style.linkRegister}>
                <Link href={"/login"} className={style.link}>Quay lại đăng nhập</Link>
            </div>
        </form>
    )
}

export default FormForgetPassword