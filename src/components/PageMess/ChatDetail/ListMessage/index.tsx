'use client'
import React, { useEffect, useRef } from 'react'
import style from "./listMessage.module.css"
import MessageText from './MessageText'

type Props = {
    dataMessage: any[];
}
function ListMessage({
    dataMessage,
}: Props) {

    const containerMessage = useRef<HTMLDivElement>(null);
    useEffect(() => {
        containerMessage.current?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }, [dataMessage?.length]);

    return (
        <div className={style.containerListMessage}>
            <div className={style.listMessage}>
                {dataMessage && dataMessage?.map((item: any, index: number) => (
                    <div key={index} ref={containerMessage}>
                        <MessageText data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListMessage