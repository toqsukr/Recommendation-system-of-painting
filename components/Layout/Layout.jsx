import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getCookie } from '../../utils/setCookies'

export const Layout = ({ children, title, onlyOnAuth }) => {
    const router = useRouter()
    const [isChecked, setChecked] = useState(false)
    useEffect(() => {
        if(onlyOnAuth && getCookie("refreshToken")) {
            router.push('/').then(() => {
                setChecked(true)
            })
        } else  setChecked(true)  
    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {isChecked && children}
        </>
    )
}