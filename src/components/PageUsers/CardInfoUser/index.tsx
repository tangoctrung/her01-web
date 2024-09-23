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
        <>
            {type === "all" ?
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
                        <button className={style.buttonSubmit}>
                            Nhắn tin
                        </button>
                    </div>
                </div> :
                <div className={style.cardInfoUserRequest} style={{
                    height: type === "request" ? "80px" : "100px"
                }}>
                    <div className={style.infoUserRequest}>
                        <Image
                            src={AvatarDefault}
                            alt=''
                            height={60}
                            width={60}
                            className={style.avatar}
                        />
                        <div className={style.infoUserNameRequest}>
                            <h3 className={style.nameUser}>Ta nGOC Trung</h3>
                            <p className={style.linkUser}>@ngoctrungtangoc</p>
                        </div>
                    </div>
                    <div className={style.actionRequest}>
                        {type === "request" && (
                            <>
                                <button className={style.buttonCancel}>
                                    Huỷ
                                </button>
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
                            </>
                        )}
                    </div>
                    <p className={`${style.textTime} ${type === "request" ? style.textAlignEnd : ""}`}>3 ngày trước</p>

                </div>}

        </>
    )
}

export default CardInfoUser

// {type === "request" && (
//     <>
//         <button className={style.buttonCancel}>
//             Huỷ
//         </button>
//         <p className={style.textTime}>3 ngày trước</p>
//     </>
// )}
// {type === "receive" && (
//     <>
//         <button className={style.buttonSubmit}>
//             Chấp nhận
//         </button>
//         <button className={style.buttonCancel}>
//             Huỷ
//         </button>
//         <p className={style.textTime}>3 ngày trước</p>
//     </>
// )}