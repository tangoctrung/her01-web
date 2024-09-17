import React from 'react'
import style from "./inputChat.module.css"
import { FaRegFileImage } from "react-icons/fa6";
import { LuSticker } from "react-icons/lu";
import { MdInsertEmoticon } from "react-icons/md";

function InputChat() {
    return (
        <div className={style.containerInputChat}>
            <div className={`${style.containerIcon}`}>
                <FaRegFileImage />
            </div>
            <form className={`${style.formInput}`}>
                <input type='text' placeholder='Nhập gì đó để gửi...' className={style.input} />
                <div className={style.iconInput}>
                    <MdInsertEmoticon className={style.iconEmoji} />
                </div>
            </form>
            <div className={`${style.containerIcon}`}>
                <LuSticker />
            </div>
        </div>
    )
}

export default InputChat