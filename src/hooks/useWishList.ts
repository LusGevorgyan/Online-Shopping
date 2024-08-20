import { useCallback, useEffect, useState } from 'react'
import { Product, WishListProduct } from '@/src/components/products/productCartItem.type'
import { StorageKeys } from '@/src/utils/constants/storageKeys'

type ReturnType = {
    productsInWishList: WishListProduct[]
    deleteFromWishList: (code: string, count?: string | number) => void
    setProductsCount: (product: Product, count?: number) => void
    gettingProductCount: (product: Product) => number
    emptyBasket: () => void
}

const useWishList = (): ReturnType => {
    const [ productsInWishList, setProductsInWishList ] = useState<WishListProduct[]>([])

    const updateWishList = useCallback((event: any) => {
        const { detail } = event
        setProductsInWishList(detail)
        localStorage.setItem(StorageKeys.WishlistProduct, JSON.stringify(detail))
    }, [])

    useEffect(() => {
        const productsList = getWishList()

        setProductsInWishList(productsList)
        window.addEventListener('updateWishList', updateWishList)

        return () => {
            window.removeEventListener('updateWishList', updateWishList)
        }
    }, [updateWishList])

    const getWishList = (): WishListProduct[] => {
        const savedProductsStr = localStorage.getItem(StorageKeys.WishlistProduct)
        if (!savedProductsStr) return []

        try {
            return JSON.parse(savedProductsStr)
        } catch (error) {
            return []
        }
    }

    const deleteFromWishList = (productNumberId: string, count: number | string = 1) => {
        const newList = productsInWishList.reduce((list: WishListProduct[], product) => {
            if (product.product.productId !== productNumberId) {
                list.push(product)
                return list
            }

            if (count === 'all' || product.product.count - Number(count) <= 0) {
                return list
            }

            product.product.count -= Number(count)
            list.push(product)
            return list
        }, [])

        setAllWishList(newList)
    }

    const setProductsCount = (product: Product, count: number = 1) => {
        const list = [...productsInWishList]
        const basketProductIndex = list.findIndex(
            basketProduct => basketProduct.product.productId === product.productId,
        )

        if (basketProductIndex === -1) {
            list.push({
                product: product,
            })
        }
        setAllWishList(list)
    }

    const gettingProductCount = (product: Product): number => {
        const basketProductIndex = productsInWishList.find(
            basketProduct => basketProduct.product.productId === product.productId,
        )
        return 0
    }

    const emptyBasket = () => {
        setAllWishList([])
    }

    const setAllWishList = (wishList: WishListProduct[]) => {
        window.dispatchEvent(
            new CustomEvent('updateWishList', {
                detail: wishList,
            }),
        )
    }

    return {
        productsInWishList,
        deleteFromWishList,
        setProductsCount,
        gettingProductCount,
        emptyBasket,
    }
}

export default useWishList
