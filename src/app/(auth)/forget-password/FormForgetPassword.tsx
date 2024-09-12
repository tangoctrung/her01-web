'use client'

import React, { useState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./forget-password.module.css"
import SizedBox from '@/components/SizedBox'
import OTPInput from 'react-otp-input'
import styleCommon from "@/app/common.module.css"
import { useRouter } from 'next/navigation'
import { IconArrowLeft } from '@/assets/icons/IconArrowLeft'

function FormForgetPassword() {

    const [step, setStep] = useState<"email" | "code" | "password">("email")
    const [otp, setOtp] = useState('');
    const router = useRouter()


    const handleClickButton = (e: any) => {
        e.preventDefault();
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
            <form onSubmit={handleClickButton} className={style.form}>
                {step === "email" &&
                    <Input
                        hintText='Nhập email của bạn...'
                        icon={<IconEmail height={24} width={24} />}
                        nameInput='email'
                    />}
                {step === "code" &&
                    <div className={style.containerOtpInput}>
                        <OTPInput
                            value={otp}
                            onChange={handleTypeOTP}
                            numInputs={6}
                            renderSeparator={<SizedBox width={10} />}
                            renderInput={(props) => <input {...props} className={styleCommon.inputOtp} />}
                        />
                    </div>
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
                    </>
                }
                <SizedBox height={8} />
                <div className={style.button}>
                    <Button onClick={handleClickButton}>
                        {step === "password" ? "Hoàn thành" : "Tiếp tục"}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FormForgetPassword