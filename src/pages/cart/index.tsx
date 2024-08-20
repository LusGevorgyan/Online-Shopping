import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import useCart from '@/src/hooks/useCart'

import { CartProduct } from '@/src/components/products/productCartItem.type'
import TotalCartInformation from '@/src/components/cart/TotalCartInformaton'
import EmptyCart from '@/src/components/empty-cart/EmptyCart'
import CouponList from '@/src/components/cart/CouponList'
import { Buttons } from '@/src/components/global/Buttons'
import ArrowIcon from '@/src/assets/icons/arrowBottom.svg'
import CloseIcon from '@/src/assets/icons/close.svg'

const CartPage = () => {
    const router = useRouter()
    const { netPriceSum, productsInBasket, deleteFromCart } = useCart()

    return (
        <>
            {productsInBasket.length > 0 ? (
                <div className='flex flex-col gap-10 w-full'>
                    <table>
                        <thead>
                        <tr className='shadow-lg'>
                            <th><FormattedMessage id='cart.product.title'/></th>
                            <th><FormattedMessage id='cart.price.title'/></th>
                            <th><FormattedMessage id='cart.quantity.title'/></th>
                            <th><FormattedMessage id='cart.subtotal.title'/></th>
                        </tr>
                        </thead>
                        {productsInBasket.map((data: CartProduct, key) => {
                            return (
                                <tbody key={key} className='border-b-[1px] border-gray-300 '>
                                    <tr>
                                        <td className='flex items-center gap-5'>
                                            <div className='relative'>
                                                <Image src={data.product.photo} alt={data.product.name} width={50} height={40}/>
                                                <div
                                                    className='absolute cursor-pointer -left-1 -top-2 flex items-center justify-center rounded-full bg-red-500 text-white w-5 h-5'
                                                    onClick={() => {
                                                        console.log(data.product.productId, 'data.product.productId')
                                                        deleteFromCart(data.product.productId as string, 'all')
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </div>
                                            </div>
                                            <p className='text-sm font-light'>
                                                {data.product.name}
                                            </p>
                                        </td>
                                        <td className='text-sm font-light'>${data.product.startingPrice}</td>
                                        <td>
                                            <div className='flex gap-4 border-2 items-center rounded py-2 px-3 w-fit border-gray-300'>
                                                <p className='text-sm font-light'>0{data.count}</p>
                                                <div>
                                                    <ArrowIcon className='cursor-pointer rotate-180'/>
                                                    <ArrowIcon className='cursor-pointer'/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-sm font-light'>${data.product.startingPrice * data.count}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>

                    <div className='flex w-full items-center justify-between'>
                        <Buttons title='cart.return.button.title' className='bg-white w-fit border-2 border-gray-300 text-black' onClick={() => router.push('/')} />
                        <Buttons title='cart.update.button.title' className='bg-white w-fit border-2 border-gray-300 text-black' onClick={() => console.log(6546)} />
                    </div>

                    <div className='flex w-full items-start justify-between'>
                        <CouponList />
                        <div className='w-96 p-8 border-2 border-gray-300 rounded'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-xl font-medium'>
                                    <FormattedMessage id='cart.cart-total.title'/>
                                </p>
                                <TotalCartInformation netPriceSum={netPriceSum}/>
                                <Buttons
                                    title='cart.process.checkout.button.title'
                                    className='mx-auto bg-[#DB4444] w-fit text-white'
                                    onClick={() => router.push('/checkout')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                ) : <EmptyCart />
            }
        </>
    )
}

export default CartPage
