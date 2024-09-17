import React from 'react'
import style from "./pageDetail.module.css"
import ChatDetail from '@/components/PageMess/ChatDetail'
import InfoChat from '@/components/PageMess/InfoChat'

function PageMessDetail() {
    return (
        <div className={style.containerPageDetail}>
            <div className={style.chatDetail}>
                <ChatDetail />
            </div>
            <div className={style.infoChat}>
                <InfoChat />
            </div>
        </div>
    )
}

export default PageMessDetail