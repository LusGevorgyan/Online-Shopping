import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NextFontWithVariable } from '@next/font'

import ScrollToTop from '@/src/components/global/ScrollToTop'
import NavBar from '@/src/components/global/Navbar'
import Footer from '@/src/components/global/Footer'

const Layout: React.FC<{
    font: NextFontWithVariable
    children: ReactNode
}> = ({ font, children }) => {
    const router = useRouter()
    const pagesWithoutNavBar = router.pathname === '/login'

    return (
        <div
            className={
                `${font.variable} flex h-screen flex-col justify-between font-sans`
            }
        >
            {!pagesWithoutNavBar && <NavBar />}
            <div className='relative px-4 sm:px-8 md:px-16 lg:px-32 min-h-fit py-20'>
                <main className='h-full'> {children} </main>
                <div className='absolute right-8 bottom-8'>
                    <ScrollToTop />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
