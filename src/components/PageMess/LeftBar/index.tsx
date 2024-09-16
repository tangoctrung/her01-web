'use client'
import React from 'react'
import style from "./leftBar.module.css"
import Input from '@/components/comon/Input'
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import ItemChat from './ItemChat';

function LeftBar() {

    const dataChat = [
        {
            id: "1",
            name: "Ta Ngoc Trung",
            avatar: "https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-1.png",
            lastMessage: "Hiii",
            time: new Date().getTime() - 2 * 60 * 1000,
            isNoti: true,
        },
        {
            id: "2",
            name: "KT",
            avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
            lastMessage: "Tuần sau rảnh không?",
            time: new Date().getTime() - 10 * 60 * 1000,
            isNoti: true,
        },
        {
            id: "3",
            name: "Le Anh Dung",
            avatar: "https://i.pinimg.com/originals/4d/e9/eb/4de9eba8c7266fc0e728c929790ba9ed.jpg",
            lastMessage: "Có gì thứ bảy này về quê nhé",
            time: new Date().getTime() - 2 * 60 * 60 * 1000,
            isNoti: true,
        },
        {
            id: "4",
            name: "Tran Van Nhat",
            avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/c748bb40780039.578d2ae7b3f4e.jpg",
            lastMessage: "Chào mọi người nhé",
            time: new Date().getTime() - 10 * 60 * 60 * 1000,
            isNoti: false,
        },
        {
            id: "5",
            name: "Hello, my friend",
            avatar: "https://cdn.dribbble.com/users/60729/screenshots/3717055/dribbble_avatar.gif",
            lastMessage: "Chú biết cái chó gì?",
            time: new Date().getTime() - 25 * 60 * 60 * 1000,
            isNoti: false,
        },
    ]
    return (
        <div className={style.containerLeftBar}>
            <div className={style.infoLeftbar}>
                <h2>Đoạn chat</h2>
                <div className={style.actionMore}>
                    <FiPlus />
                </div>
            </div>
            <div className={style.input}>
                <Input
                    hintText='Tìm kiếm cuộc trò chuyện...'
                    icon={<IoIosSearch className={style.iconSearch} />}
                    nameInput='email'
                    py={8}
                />
            </div>
            <div className={style.listChat}>
                {dataChat && dataChat?.map((item: any, index: number) => (
                    <ItemChat key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default LeftBar