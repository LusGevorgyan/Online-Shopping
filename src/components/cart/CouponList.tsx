import React from 'react'
import { useRouter } from 'next/router'
import { SearchInput } from '@/src/components/global/Input'
import { Buttons } from '@/src/components/global/Buttons'

const CouponList = () => {
    const router = useRouter()
    return (
        <div className='flex w-full items-center gap-4'>
            <SearchInput placeholder='cart.coupon.placeholder.title' className='border-2 border-gray-300'/>
            <Buttons title='cart.coupon.button.title' onClick={() => router.push('/')} />
        </div>
    );
};

export default CouponList
