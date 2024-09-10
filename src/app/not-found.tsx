import React from 'react'
import ImageNotFound from '@/assets/images/404.webp';
import Image from 'next/image';
import Link from 'next/link';
import style from "./page.module.css";

function PageNotFound() {
    return (
        <div className={style.containerNotFound}>
            <Image
                src={ImageNotFound}
                alt="notfound"
                height={300}
            />
            <p className={style.title}>Không tìm thấy trang yêu cầu</p>
            <Link href="/" className={style.link}>Quay về trang chủ</Link>
        </div>
    )
}

export default PageNotFound