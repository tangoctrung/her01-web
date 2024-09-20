import React, { Suspense } from 'react'
import style from "./users.module.css"
import PageUsers from '@/components/PageUsers'

function Users() {
    return (
        <div className={style.pageUser}>
            <Suspense>
                <PageUsers />
            </Suspense>
        </div >
    )
}

export default Users