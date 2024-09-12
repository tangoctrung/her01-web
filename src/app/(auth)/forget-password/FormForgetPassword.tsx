'use client'

import React, { useState } from 'react'
import Input from '@/components/comon/Input'
import Button from '@/components/comon/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./forget-password.module.css"
import SizedBox from '@/components/comon/SizedBox'
import { useRouter } from 'next/navigation'
import { IconArrowLeft } from '@/assets/icons/IconArrowLeft'
import FormTypeCode from '@/components/FormTypeCode'

function FormForgetPassword() {

    const [step, setStep] = useState<"email" | "code" | "password">("email")
    const [otp, setOtp] = useState('');
    const router = useRouter()


    const handleClickButton = () => {
        if (step === "email") {
            setStep("code")
            return;
        }

        if (step === "code") {
            setStep("password")
            return;
        }

        if (step === "password") {
            router.push("/login")
            return;
        }
    }

    const handleClickBack = () => {
        if (step === "email") {
            router.push("/login")
            return;
        }

        if (step === "code") {
            setStep("email")
            return;
        }

        if (step === "password") {
            setStep("email")
            return;
        }
    }

    const handleTypeOTP = (value: string) => {
        setOtp(value)
        if (value?.length === 6) {
            // gửi api verify otp
        }
    }

    return (
        <div className={style.container}>
            <div className={style.containerTitle}>
                <div className={style.iconLeft} onClick={handleClickBack}>
                    <IconArrowLeft />
                </div>
                <h1 className={style.title}>{step === "email" ? "Nhập email của bạn" : (step === "code" ? "Nhập mã được gửi về email" : "Tạo mật khẩu mới")}</h1>
                <SizedBox width={38} />
            </div>
            <div className={style.form}>
                {step === "email" &&
                    <>
                        <Input
                            hintText='Nhập email của bạn...'
                            icon={<IconEmail height={24} width={24} />}
                            nameInput='email'
                        />
                        <SizedBox height={8} />
                        <div className={style.button}>
                            <Button onClick={handleClickButton}>
                                Tiếp tục
                            </Button>
                        </div>
                    </>}
                {step === "code" &&
                    <FormTypeCode
                        otp={otp}
                        handleTypeOTP={handleTypeOTP}
                    />
                }
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
                        <SizedBox height={8} />
                        <div className={style.button}>
                            <Button onClick={handleClickButton}>
                                Tiếp tục
                            </Button>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default FormForgetPassword