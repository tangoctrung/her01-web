import React from 'react'
import style from "./register.module.css"
import FormRegister from './FormRegister'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đăng ký',
    description: 'Trang đăng ký của Her01, được tạo bởi trungtn'
}

function RegisterPage() {
    return (
        <div className={style.login}>
            <div className={style.container}>
                <h1 className={style.title}>Đăng ký - Her01</h1>
                <FormRegister />
            </div>
        </div>
    )
}

export default RegisterPage