import React from 'react'
import FormLogin from './FormLogin'
import style from "./login.module.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đăng nhập',
    description: 'Trang đăng nhập của Her01, được tạo bởi trungtn'
}

function LoginPage() {


    return (
        <div className={style.login}>
            <div className={style.container}>
                <h1 className={style.title}>Đăng nhập - Her01</h1>
                <FormLogin />
            </div>
        </div>
    )
}

export default LoginPage