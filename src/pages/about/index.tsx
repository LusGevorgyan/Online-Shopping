import React, { useState } from 'react'
import Image from 'next/image'
import SideImg from '@/src/assets/images/Side Image (1).png'

import Shop from '@/src/assets/icons/shop.svg'
import Sale from '@/src/assets/icons/sale.svg'
import Shopping from '@/src/assets/icons/shopping.svg'
import Money from '@/src/assets/icons/money.svg'

const aaa = [
    { id: 1, icon: Shop, title: '10.5k ', description: 'Sallers active our site' },
    { id: 2, icon: Sale, title: '33k', description: 'Mopnthly Produduct Sale' },
    { id: 3, icon: Shopping, title: '45.5k', description: 'Customer active in our site' },
    { id: 4, icon: Money, title: '25k', description: 'Anual gross sale in our site' }
]

const AboutPage = () => {
    const [ active, setActive ] = useState(1)
    const handleActive = (id: number) => {
        setActive(id)
    }

    return (
        <div className='flex w-full flex-col gap-36'>
            <div className='flex w-full gap-10 justify-between items-center'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl font-bold'>Our Story</p>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <Image src={SideImg} alt='side image' />
            </div>

            <div className='flex w-full gap-8 justify-between items-center'>
                {
                    aaa.map(data => {
                        return (
                            <div
                                key={data.id}
                                className={`rounded cursor-pointer flex flex-col gap-6 py-8 px-12 ${active === data.id ? 'shadow !bg-[#DB4444]' : 'border-2 border-gray-300 '}`}
                                onClick={() => handleActive(data.id)}
                            >
                                <div className='flex flex-col items-center gap-6'>
                                    <div className={`flex justify-center items-center p-3 ${ active === data.id ? 'bg-red-300' : 'bg-gray-300' } rounded-full`}>
                                        <div className={`flex justify-center items-center p-2 ${ active === data.id ? 'bg-white' : 'bg-black' } rounded-full`}>
                                            <data.icon stroke={ active === data.id ? 'white' : 'black' } fill={ active === data.id ? 'black' : 'white' }/>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col items-center gap-3 ${active === data.id && 'text-white'}`}>
                                        <p className='text-4xl font-bold'>{data.title}</p>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutPage
