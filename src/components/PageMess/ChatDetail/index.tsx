'use client'
import React, { useState } from 'react'
import style from "./chatDetail.module.css"
import TopChatDetail from './TopChatDetail'
import ListMessage from './ListMessage'
import InputChat from './InputChat'

function ChatDetail() {
    const messages = [
        {
            id: 1,
            content: "Xin chao ban nha",
            senderId: 123,
            time: new Date().getTime() - 20 * 60 * 1000
        },
        {
            id: 2,
            content: "T tên là Trung, sinh năm 2001, sinh viên ngành CNTT của trường Đại học Công Nghệ, Đại học Quốc gia Hà Nội, t mới tốt nghiệp đầu năm 2024.",
            senderId: 123,
            time: new Date().getTime() - 19 * 60 * 1000
        },
        {
            id: 3,
            content: "Còn bạn thì sao?",
            senderId: 123,
            time: new Date().getTime() - 10 * 60 * 1000
        },
        {
            id: 4,
            content: "Oke chào bạn.",
            senderId: 1234,
            time: new Date().getTime() - 5 * 60 * 1000
        },
        {
            id: 5,
            content: "T cũng như bạn nhé",
            senderId: 1234,
            time: new Date().getTime() - 5 * 60 * 1000
        },
    ]

    const [dataMessage, setDataMessage] = useState<any[]>(messages);
    return (
        <div className={style.containerChatDetail}>
            <TopChatDetail />
            <ListMessage dataMessage={dataMessage} />
            <InputChat setDataMessage={setDataMessage

            } />
        </div>
    )
}

export default ChatDetail