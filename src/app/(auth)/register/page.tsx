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
        <div className={style.register}>
            <FormRegister />
        </div>
    )
}

export default RegisterPage