import React from 'react'
import style from "./users.module.css"
import PageUsers from '@/components/PageUsers'

function Users() {
    return (
        <div className={style.pageUser}>
            <PageUsers />
        </div>
    )
}

export default Users