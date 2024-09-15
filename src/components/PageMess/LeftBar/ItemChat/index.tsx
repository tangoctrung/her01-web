import Image from 'next/image'
import React from 'react'
import AvatarDefault from "@/assets/images/avatarDefault.png";
import style from "./itemChat.module.css"

function ItemChat() {
    return (
        <div className={style.itemChat}>
            <div className={style.containerChat}>
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
                    <b className={style.nameChat}>Ta Ngoc Trung</b>
                    <div className={style.messChat}>
                        <p className={style.messText}>Bạn: hello ban nhe hihi xin chao moi nguoi ne</p>
                        <p className={style.messTime}> • 7 giờ</p>
                    </div>
                </div>
            </div>
            <div className={style.containerDotNoti}>
                <p className={style.dotNoti}></p>
            </div>
        </div>
    )
}

export default ItemChat