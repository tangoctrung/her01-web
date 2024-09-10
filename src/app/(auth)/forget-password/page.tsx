import React from 'react'
import style from "./forget-password.module.css"
import FormForgetPassword from './FormForgetPassword'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Quên mật khẩu',
    description: 'Trang quên mật khẩu của Her01, được tạo bởi trungtn'
}

function ForgetPassword() {
    return (
        <div className={style.forgetPassword}>
            <div className={style.container}>
                <h1 className={style.title}>Quên mật khẩu - Her01</h1>
                <FormForgetPassword />
            </div>
        </div>
    )
}

export default ForgetPassword