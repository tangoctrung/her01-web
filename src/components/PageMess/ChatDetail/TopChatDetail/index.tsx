import React from 'react'
import style from "./topChatDetail.module.css"
import { IoIosSearch } from "react-icons/io";
import { FaInfo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Image from 'next/image';
import AvatarDefault from "@/assets/images/avatarDefault.png";

function TopChatDetail() {
    return (
        <div className={style.containerTopChatDetail}>
            <div className={style.nameChat}>
                <div className={style.avatar}>
                    <Image
                        src={AvatarDefault}
                        alt=''
                        className={style.imageAvatar}
                        height={50}
                        width={50}
                    />
                </div>
                <div className={style.infoChat}>
                    <b className={style.name}>Ta Ngoc Trung</b>
                    <p className={style.online}>5 phut truoc</p>
                </div>
            </div>
            <div className={style.listIconChat}>
                <div className={style.iconContainer}>
                    <IoIosSearch className={style.iconSearch} />
                </div>
                <div className={style.iconContainer}>
                    <IoMdCall className={style.iconCall} />
                </div>
                <div className={style.iconContainer}>
                    <FaInfo className={style.iconInfo} />
                </div>
            </div>
        </div>
    )
}

export default TopChatDetail