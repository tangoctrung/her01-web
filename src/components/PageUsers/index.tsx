'use client'
import React, { useState } from 'react'
import style from "./pageUser.module.css"
import Input from '@/components/comon/Input'
import { IoIosSearch } from 'react-icons/io'
import CardInfoUser from './CardInfoUser'

function PageUsers() {

    const [tabActive, setTabActive] = useState<string>("all")
    const handleClickAction = (value: string) => {
        setTabActive(value)
    }
    return (
        <div className={style.containerUser}>
            <div className={style.topBarPageUser}>
                <div className={style.action}>
                    <p
                        onClick={() => handleClickAction("all")}
                        className={`${style.itemAction} ${tabActive === "all" ? style.itemActionActive : ''}`}
                    >
                        Tất cả
                    </p>
                    <p
                        onClick={() => handleClickAction("request")}
                        className={`${style.itemAction} ${tabActive === "request" ? style.itemActionActive : ''}`}
                    >
                        Yêu cầu gửi
                    </p>
                    <p
                        onClick={() => handleClickAction("receive")}
                        className={`${style.itemAction} ${tabActive === "receive" ? style.itemActionActive : ''}`}
                    >
                        Yêu cầu nhận
                    </p>
                </div>
                <div className={style.inputSearch}>
                    <Input
                        hintText='Tìm kiếm ai đó...'
                        icon={<IoIosSearch className={style.iconSearch} />}
                        nameInput='text'
                        py={8}
                        noError={true}
                    />
                </div>
            </div>

            <div className={style.content}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any, index: number) => (
                    <div key={index}>
                        <CardInfoUser />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PageUsers