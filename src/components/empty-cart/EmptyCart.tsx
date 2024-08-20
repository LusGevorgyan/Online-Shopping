import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import EmptyCartImage from '@/src/assets/images/Screenshot_from_2023-09-13_17-21-30-removebg-preview.png'
import { Buttons } from '@/src/components/global/Buttons'

const EmptyCart = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col items-center gap-24 w-full'>
            <div className='flex flex-col items-center gap-10'>
                <Image src={EmptyCartImage} alt='Empty cart' />
                <div className='flex items-center flex-col gap-5'>
                    <p className='text-4xl font-medium'>
                        <FormattedMessage id='cart.empty.title'/>
                    </p>
                    <p className='text-sm font-light text-gray-500'>
                        <FormattedMessage id='cart.empty.description'/>
                    </p>
                </div>
            </div>
            <Buttons title='cart.return.button.title' onClick={() => router.push('/')} />
        </div>
    )
}
export default EmptyCart
