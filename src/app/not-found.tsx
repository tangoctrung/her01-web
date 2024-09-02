import React from 'react'
import ImageNotFound from '@/assets/images/404.webp';
import Image from 'next/image';
import Link from 'next/link';
import style from "./page.module.css";

function PageNotFound() {
    return (
        <div className={style.container}>
            <Image
                src={ImageNotFound}
                alt="notfound"
                height={300}
            />
            <p>Không tìm thấy trang yêu cầu</p>
            <Link href="/">Quay về trang chủ</Link>
        </div>
    )
}

export default PageNotFound