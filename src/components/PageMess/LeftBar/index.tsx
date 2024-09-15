import React from 'react'
import style from "./leftBar.module.css"
import Input from '@/components/comon/Input'
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import ItemChat from './ItemChat';

function LeftBar() {
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
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />
                <ItemChat />

            </div>
        </div>
    )
}

export default LeftBar