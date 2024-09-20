'use client'
import React, { useState } from 'react'
import style from "./pageUser.module.css"
import Input from '@/components/comon/Input'
import { IoIosSearch } from 'react-icons/io'
import CardInfoUser from './CardInfoUser'
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrUserAdd } from "react-icons/gr";
import { RiUserSharedLine } from "react-icons/ri";
import { useRouter, useSearchParams } from 'next/navigation'

function PageUsers() {

    const params = useSearchParams()
    const router = useRouter()
    const [tabActive, setTabActive] = useState<string>(params.get("tab") || "all")

    const handleClickAction = (value: string) => {
        setTabActive(value)
        router.push(`/users?tab=${value}`)
    }
    return (
        <div className={style.containerUser}>
            <div className={style.topBarPageUser}>
                <div className={style.action}>
                    <div
                        onClick={() => handleClickAction("all")}
                        className={`${style.itemAction} ${tabActive === "all" ? style.itemActionActive : ''}`}
                    >
                        <HiOutlineUserGroup className={style.iconAction} />
                        <p className={style.textAction}>Tất cả</p>
                    </div>
                    <div
                        onClick={() => handleClickAction("request")}
                        className={`${style.itemAction} ${tabActive === "request" ? style.itemActionActive : ''}`}
                    >
                        <GrUserAdd className={style.iconAction} />
                        <p className={style.textAction}>Yêu cầu gửi</p>
                    </div>
                    <div
                        onClick={() => handleClickAction("receive")}
                        className={`${style.itemAction} ${tabActive === "receive" ? style.itemActionActive : ''}`}
                    >
                        <RiUserSharedLine className={style.iconAction} />
                        <p className={style.textAction}>Yêu cầu nhận</p>
                    </div>
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
                <div className={style.listCard}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item: any, index: number) => (
                        <div key={index}>
                            <CardInfoUser type={params.get("tab") || "all"} data={{}} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PageUsers