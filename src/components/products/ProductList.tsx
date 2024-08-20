import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import useWishList from '@/src/hooks/useWishList'
import useToaster from '@/src/hooks/useToaster'
import useCart from '@/src/hooks/useCart'
import BillingDetailsCartInfo from '@/src/components/products/ProsuctColorList'
import { Product, WishListProduct } from '@/src/components/products/productCartItem.type'
import RatingList from '@/src/components/global/customRating'
import { Buttons } from '@/src/components/global/Buttons'
import WishlistIcon from '@/src/assets/icons/wishlist.svg'
import DeleteIcon from '@/src/assets/icons/delete.svg'

export type ListItemProduct = {
    productItem: Product,
    isWishList?: boolean
}

const ProductList: React.FC<ListItemProduct> = ({ productItem, isWishList }) => {
    const [ isShown, setIsShown ] = useState(false)
    const [ activeCode, setActiveCode ] = useState(0)
    const [ product, setProduct ] = useState(productItem)
    const [ count, setCount ] = useState(1)
    const [ isAddWishList, setIsAddWishList ] = useState(true)
    const { productsInBasket, setProductCount, getProductCount, countBasket } = useCart()
    const { productsInWishList, deleteFromWishList, setProductsCount, gettingProductCount } = useWishList()

    const { success, error } = useToaster()
    const intl = useIntl()

    const addedCartMessage = intl.formatMessage({ id: 'toast.success.add.cart.message' })
    const addedWishListMessage = intl.formatMessage({ id: 'toast.success.add.wishlist.message' })

    const isBasket = false
    useEffect(() => {
        if (isBasket) {
            setCount(getProductCount(product) || 1)
        }
    }, [getProductCount, isBasket, product])

    const cartProduct = productsInBasket.find(elem => elem.product.productId === productItem.productId)
    const addCartProduct = () => {
        if (product) {
            const productCount = getProductCount(product)
            setProductCount(product, getProductCount(product) + count)
        }
        if(!cartProduct) {
            success(addedCartMessage)
        }
    }

    const wishListProduct = productsInWishList.find((elem: WishListProduct) => elem.product?.productId === productItem.productId)
    const addWishListProduct = () => {
        if (product) {
            const productCount = gettingProductCount(product)
            setProductsCount(product, gettingProductCount(product) + count)
        }
        if(!wishListProduct) {
            success(addedWishListMessage)
        }
        setIsAddWishList(!isAddWishList)
    }

    return (
        <div className='flex flex-col gap-4 items-start'>
            <div
                key={product.productId}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className='bg-[#F5F5F5] relative flex items-center justify-center w-64 h-72'
            >
                <Image src={product.photo} alt={product.name} />

                <div className='flex items-center gap-2'>
                    {
                        product.productStatus && (
                            <div className='rounded absolute top-3 left-3 bg-[#00FF66] text-white px-3 py-1'>
                                {product.productStatus}
                            </div>
                        )
                    }
                    {
                        product.disCount > 0 && (
                            <div className='rounded absolute top-3 left-3 bg-[#DB4444] text-white px-3 py-1'>
                                -{product.disCount}%
                            </div>
                        )
                    }
                </div>

                {(cartProduct || isShown) && (
                    <div className='w-full mt-4 absolute bottom-0'>
                        <Buttons
                            className={`text-center w-full bg-${cartProduct ? '[#DB4444] cursor-auto': 'black'} !px-0 text-white`}
                            title={`${cartProduct ? 'cart.button.added.title' : 'cart.button.add.title'}`}
                            onClick={addCartProduct}
                        />
                    </div>
                )}

                {isWishList ? (
                    <div className='absolute right-3 top-3 flex flex-col gap-2'>
                        <div
                            className='flex items-center rounded-full bg-white cursor-pointer p-1 justify-center'
                            onClick={() => {
                                console.log(productItem.productId, '64646544')
                                deleteFromWishList(productItem.productId, 'all')
                            }}
                        >
                            <DeleteIcon stroke='black' fill='white' />
                        </div>
                    </div>
                ) : (
                    <div className='absolute right-3 top-3 flex flex-col gap-2'>
                        <div className='flex items-center rounded-full bg-white cursor-pointer p-1 justify-center' onClick={addWishListProduct}>
                            <WishlistIcon stroke={ !wishListProduct ? 'black' : 'none' } fill={ !wishListProduct ? 'none' : 'red' }/>
                        </div>
                    </div>
                )}
            </div>

            <div className='flex flex-col w-full'>
                <p>{product.name}</p>
                <div className='flex items-center gap-3'>
                    <p className={`${product.disCount < 1 && 'hidden' } text-[#DB4444] font-bold`}>${product.startingPrice * ((100 - product.disCount)/100)}</p>
                    <p className={`${!(product.disCount < 1) ? 'line-through' : 'text-[#DB4444]' } text-[#7D8184] font-medium`}>${product.startingPrice}</p>
                </div>

                {
                    !isWishList && (
                        <div className='flex justify-between w-full items-center gap-2'>
                            <RatingList values={product.rating}/>
                            <p className='text-gray-500 font-bold'>({product.count})</p>
                        </div>
                    )
                }

                <div className='flex gap-2 items-center'>
                    {
                        product.colors && product.colors?.map((element, index) => <BillingDetailsCartInfo key={element.productId} color={element.code}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductList
