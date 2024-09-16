'use client'
import Image from 'next/image'
import React from 'react'
import AvatarDefault from "@/assets/images/avatarDefault.png";
import style from "./itemChat.module.css"
import { usePathname, useRouter } from 'next/navigation';
import { timeSince } from '@/utils/formatTime';


type Props = {
    data: any;
}
function ItemChat({
    data,
}: Props) {

    const router = useRouter();
    const pathName = usePathname();

    console.log({ pathName });


    const handleClickItemChat = () => {
        router.push(`/mess/${data?.id}`)
    }
    return (
        <div
            className={`${style.itemChat} ${pathName?.split("/mess/")[1] === data?.id ? style.activeItemChat : ""}`}
            onClick={handleClickItemChat}
        >
            <div className={style.containerChat}>
                <div className={style.avatar}>
                    <Image
                        src={data?.avatar}
                        alt=''
                        className={style.imageAvatar}
                        height={50}
                        width={50}
                    />
                </div>
                <div className={style.infoChat}>
                    <b className={style.nameChat}>{data?.name}</b>
                    <div className={`${style.messChat} ${data?.isNoti ? style.messNoti : ''}`}>
                        <p className={style.messText}>{data?.lastMessage}</p>
                        <p className={style.messTime}> • {timeSince(new Date(data?.time))}</p>
                    </div>
                </div>
            </div>
            {data?.isNoti &&
                <div className={style.containerDotNoti}>
                    <p className={style.dotNoti}></p>
                </div>}
        </div>
    )
}

export default ItemChat