import React from 'react'
import style from "./chatDetail.module.css"
import TopChatDetail from './TopChatDetail'
import ListMessage from './ListMessage'
import InputChat from './InputChat'

function ChatDetail() {
    return (
        <div className={style.containerChatDetail}>
            <TopChatDetail />
            <ListMessage />
            <InputChat />
        </div>
    )
}

export default ChatDetail