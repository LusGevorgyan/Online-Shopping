import React from 'react'
import useCart from '@/src/hooks/useCart'
import Image from 'next/image'
import { CartProduct } from '@/src/components/products/productCartItem.type'
import TotalCartInformation from '@/src/components/cart/TotalCartInformaton'
import CouponList from '@/src/components/cart/CouponList'

import VisaImg from '@/src/assets/images/Visa.png'
import MasterCardImg from '@/src/assets/images/Mastercard.png'
import NagadImg from '@/src/assets/images/Nagad.png'
import BkashImg from '@/src/assets/images/image 32.png'

const BillingDetailsCartInfo = () => {
    const { netPriceSum, productsInBasket } = useCart()

    return (
        <div className='flex w-full flex-col gap-8'>
            <div className='flex h-52 pr-4 overflow-y-auto flex-col w-full gap-8'>
                {productsInBasket.map((data: CartProduct, key) => {
                    return (
                        <div key={data.product.productId} className='flex items-center gap-5'>
                            <Image src={data.product.photo} alt={data.product.name} width={50} height={40}/>
                            <div className='flex items-center  w-full justify-between'>
                                <p className='text-sm font-light'>
                                    {data.product.name}
                                </p>
                                <p className='text-sm font-light'>${data.product.startingPrice}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <TotalCartInformation netPriceSum={netPriceSum} />
            <div className='flex justify-between items-center w-full'>
                <div className='flex gap-4 items-center'>
                    <label
                        className={`relative flex cursor-pointer items-center rounded-full`}
                        htmlFor='ripple-on'
                        data-ripple-dark='true'
                    >
                        <input
                            id='ripple-on'
                            name='ripple'
                            type='radio'
                            className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black`}
                            checked
                        />
                        <div className={`pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4`}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-3.5 w-3.5'
                                viewBox='0 0 16 16'
                                fill='black'
                            >
                                <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
                            </svg>
                        </div>
                    </label>
                    <p>Bank</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={BkashImg} alt='bkash card' />
                    <Image src={VisaImg} alt='visa card' />
                    <Image src={MasterCardImg} alt='master card' />
                    <Image src={NagadImg} alt='nagad card' />
                </div>
            </div>
            <CouponList />
        </div>
    )
}

export default BillingDetailsCartInfo
