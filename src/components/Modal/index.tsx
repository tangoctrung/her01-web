import React, { ReactNode } from 'react'
import style from "./modal.module.css"

type Props = {
    children?: ReactNode;
    isOpen?: boolean;
    setIsOpen?: any;
}

function Modal({
    children,
    isOpen,
    setIsOpen,
}: Props) {

    function handleCloseModal() {
        setIsOpen(false);
    }

    if (!isOpen) return <></>
    return (
        <div className={style.modal}>
            <div className={style.container} onClick={handleCloseModal} title='Click để đóng modal'></div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}

export default Modal