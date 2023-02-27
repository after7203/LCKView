import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const { setTheme } = useTheme()
    useEffect(() => {
        setTheme('white')
    }, [])
    return (
        <>
            <nav className="flex bg-black text-white justify-between p-5 py-4 text-xl font-extrabold">
                <div className='hover:cursor-pointer font-normal' style={{ fontFamily: 'Black Han Sans' }}>LCK 뷰</div>
                <div className='-translate-x-1/2 absolute left-1/2 space-x-4'>
                    <span>일정</span>
                    <span>순위</span>
                    <span>로스터</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </nav>
        </>
    )
}

export default Navbar