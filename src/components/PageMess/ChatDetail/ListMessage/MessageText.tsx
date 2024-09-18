import React from 'react'
import style from "./listMessage.module.css"

type Props = {
    data: any;
}
function MessageText({
    data,
}: Props) {
    return (
        <div className={`${style.containerMessage} ${data?.senderId === 123 ? style.yourMessage : style.myMessage}`}>
            <span className={`${style.messageText}  ${data?.senderId === 123 ? style.bgYourMessage : style.bgMyMessage}`}>
                {data?.content}
            </span>
        </div>
    )
}

export default MessageText