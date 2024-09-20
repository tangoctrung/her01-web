import React from 'react'
import style from "./cardInfoUser.module.css"
import AvatarDefault from "@/assets/images/avatarDefault.png"
import Image from 'next/image';
import Button from '@/components/comon/Button';

type Props = {
    type: string | "all" | "request" | "receive";
    data: any;
}
function CardInfoUser({
    type,
    data,
}: Props) {

    const handleClickButtonChatRequest = () => {

    }
    return (
        <div className={style.cardInfoUser}>
            <div className={style.infoUser}>
                <Image
                    src={AvatarDefault}
                    alt=''
                    height={80}
                    width={80}
                    className={style.avatar}
                />
                <h3 className={style.nameUser}>Ta nGOC Trung</h3>
                <p className={style.linkUser}>@ngoctrungta</p>
                <div className={style.description}>
                    <p className={style.textdescription}>- Đang làm việc ở VTVCab</p>
                    <p className={style.textdescription}>- Đang sống ở Hà Nội, Việt Nam</p>
                </div>
            </div>

            <div className={style.action}>
                {type === "all" && (
                    <>
                        <button className={style.buttonSubmit}>
                            Nhắn tin
                        </button>
                    </>
                )}
                {type === "request" && (
                    <>
                        <button className={style.buttonCancel}>
                            Huỷ
                        </button>
                        <p className={style.textTime}>3 ngày trước</p>
                    </>
                )}
                {type === "receive" && (
                    <>
                        <button className={style.buttonSubmit}>
                            Chấp nhận
                        </button>
                        <button className={style.buttonCancel}>
                            Huỷ
                        </button>
                        <p className={style.textTime}>3 ngày trước</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default CardInfoUser