'use client'
import React, { useState } from 'react'
import style from "./inputChat.module.css"
import { FaRegFileImage } from "react-icons/fa6";
import { LuSticker } from "react-icons/lu";
import { MdInsertEmoticon } from "react-icons/md";
import EmojiPicker, { Theme } from 'emoji-picker-react';

type Props = {
    setDataMessage: any;
}
function InputChat({
    setDataMessage,
}: Props) {
    const [messageText, setMessageText] = useState<string>("");
    const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);


    const handleTypeMessage = (e: any) => {
        setMessageText(e.target.value)
    }
    const handleSendMessage = (e: any) => {
        e?.preventDefault();
        console.log({ messageText });

        const message = {
            content: messageText,
            time: new Date().getTime(),
            senderId: 1234
        }
        setDataMessage((i: any) => [...i, message]);
        setMessageText("");
    }

    const handleClickIconEmoji = () => {
        setIsShowEmoji(!isShowEmoji);
    }

    const handleClickEmoji = (value: any) => {
        setMessageText((i: string) => i + value?.emoji);
    }
    return (
        <div className={style.containerInputChat}>
            <div className={`${style.containerIcon}`}>
                <FaRegFileImage />
            </div>
            <form onSubmit={handleSendMessage} className={`${style.formInput}`}>
                <input
                    type='text' placeholder='Nhập gì đó để gửi...'
                    className={style.input}
                    onChange={handleTypeMessage}
                    value={messageText}
                />
                <div className={style.iconInput} onClick={handleClickIconEmoji}>
                    <MdInsertEmoticon className={style.iconEmoji} />
                </div>
                {isShowEmoji &&
                    <div className={style.containerEmoji}>
                        <div className={style.outsideEmoji} onClick={() => setIsShowEmoji(false)}></div>
                        <EmojiPicker onEmojiClick={handleClickEmoji} theme={Theme.DARK} />
                    </div>}
            </form>
            <div className={`${style.containerIcon}`}>
                <LuSticker />
            </div>
        </div>
    )
}

export default InputChat