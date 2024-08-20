import React, { useState } from 'react'
import ArrowToTop from '../../assets/icons/arrowToTop.svg'

const ScrollToTop = () => {
    const [ visible, setVisible ] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 100){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div
            onClick={scrollToTop}
            className={`${visible ? 'flex' : 'hidden'} justify-center items-center cursor-pointer rounded-full z-20 bg-[#F5F5F5] p-3 text-white`}
        >
            <ArrowToTop />
        </div>
    )
}
export default ScrollToTop
