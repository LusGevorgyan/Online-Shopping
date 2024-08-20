import React from 'react'
import { useRouter } from 'next/router'

const BreadCrumbs: React.FC = () => {
    const router = useRouter()
    return (
        <nav className='text-black font-bold' aria-label='Breadcrumb'>
            <ol className='list-none p-0 inline-flex'>
                <li className='flex gap-1 items-center'>
                    <a href='#'>Home</a>
                    <svg width='7' height='13' viewBox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <line x1='6.4453' y1='0.852389' x2='0.445304' y2='12.6024' stroke='black' strokeOpacity='0.5'/>
                    </svg>
                </li>

                <li>
                    <a className='text-gray-500' aria-current='page'>
                        {router.pathname}
                    </a>
                </li>
            </ol>
        </nav>
    )
}
export default BreadCrumbs
