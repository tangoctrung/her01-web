'use client'

import React, { useState } from 'react'
import Input from '@/components/comon/Input'
import Button from '@/components/comon/Button'
import { IconEmail } from '@/assets/icons/IconEmail'
import { IconPassword } from '@/assets/icons/IconPassword'

import style from "./register.module.css"
import Link from 'next/link'
import SizedBox from '@/components/comon/SizedBox'
import { IconUsername } from '@/assets/icons/IconUsername'
import Modal from '@/components/comon/Modal'
import { useRouter } from 'next/navigation'
import FormTypeCode from '@/components/FormTypeCode'
import { IconArrowLeft } from '@/assets/icons/IconArrowLeft'

function FormRegister() {

    const [step, setStep] = useState<"register" | "code">("register");
    const [otp, setOtp] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const router = useRouter();

    const handleClickTitle = () => {
        if (step === "register") {
            router.push("/")
        }
    }
    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;

        console.log({ displayName, email, password, confirmPassword });
        setStep("code");
    }

    const handleClickBack = () => {
        if (step === "code") {
            setStep("register")
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
                {step === "code" &&
                    <div className={style.iconLeft} onClick={handleClickBack}>
                        <IconArrowLeft />
                    </div>}
                <h1 className={style.title} onClick={handleClickTitle}>{step === "code" ? "Nhập mã được gửi về email" : "Đăng ký - Her01"}</h1>
                {step === "code" && <SizedBox width={38} />}
            </div>
            {step === "register" &&
                <form onSubmit={handleSubmitLogin} className={style.form}>
                    <Input
                        hintText='Nhập tên của bạn...'
                        icon={<IconUsername height={20} width={20} />}
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

                    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                        <div>
                            Hello, this is modal.
                        </div>
                    </Modal>
                </form>}

            {step === "code" &&
                <FormTypeCode
                    otp={otp}
                    handleTypeOTP={handleTypeOTP}
                />}
        </div>
    )
}

export default FormRegister