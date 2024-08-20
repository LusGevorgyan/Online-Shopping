import React from 'react'
import { FormattedMessage } from 'react-intl'
import useWishList from '@/src/hooks/useWishList'
import ProductList from '@/src/components/products/ProductList'
import { Buttons } from '@/src/components/global/Buttons'

const WishListPage = () => {
    const { productsInWishList } = useWishList()

    return (
        <div className='w-full flex gap-20 flex-col'>
            <div className='flex w-full flex-wrap items-center justify-between gap-y-16 gap-x-7'>
                <div className='flex justify-between items-center'>
                    <FormattedMessage id='wishlist.title'/> ({productsInWishList.length})
                </div>
                <Buttons
                    title='cart.return.button.title'
                    className='bg-white w-56 border-2 text-center px-4 border-gray-300 text-black'
                    onClick={() => console.log(6546)}
                />
            </div>

            <div className='flex flex-wrap gap-10 w-full justify-center md:justify-between'>
                { productsInWishList.map((data, index) =>
                    <ProductList
                        key={index}
                        isWishList={true}
                        {...data.product}
                    />
                ) }
            </div>
        </div>
    )
}

export default WishListPage
