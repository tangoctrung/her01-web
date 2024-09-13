'use client'
import React from 'react'
import style from "./navbar.module.css"
import { IconNewFeed } from '@/assets/icons/IconNewFeed'
import { IconUsers } from '@/assets/icons/IconUsers'
import { IconContact } from '@/assets/icons/IconContact'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IconLogin } from '@/assets/icons/IconLogin'

function Navbar() {

    const pathname = usePathname();

    const listMenuNavbar: any[] = [
        {
            id: 1,
            path: "newFeeds",
            value: "Bản tin",
            icon: <IconNewFeed />,
        },
        {
            id: 2,
            path: "mess",
            value: "Liên lạc",
            icon: <IconContact />,
        }, {
            id: 3,
            path: "users",
            value: "Người dùng",
            icon: <IconUsers />,
        },
    ]
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Link href={"/"} className={style.logoLink}>
                    Her01
                </Link>
            </div>
            <div className={style.listContent}>
                {listMenuNavbar && listMenuNavbar?.map((item: any, index: number) => (
                    <Link href={`/${item?.path}`} key={index} className={`${style.itemMenu} ${(pathname === item?.path || pathname?.includes(item?.path)) ? style.active : ''}`}>
                        {item?.icon}
                        <p className={style.text}>{item?.value}</p>
                    </Link>
                ))}
            </div>
            <div className={style.auth}>
                <Link href={`/login`} className={style.containerTextAuth}>
                    <IconLogin className={style.iconAuth} />
                    <p className={style.textAuth}>Đăng nhập</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar