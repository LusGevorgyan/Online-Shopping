import { useCallback, useEffect, useState } from 'react'

import { Product, CartProduct } from '@/src/components/products/productCartItem.type'
import { StorageKeys } from '@/src/utils/constants/storageKeys'

type ReturnType = {
    productsInBasket: CartProduct[]
    countBasket: number
    deleteFromCart: (code: string, count?: string | number) => void
    setProductCount: (product: Product, count?: number) => void
    getProductCount: (product: Product) => number
    emptyBasket: () => void
    setBasketListByCode: (data: { code: string; products: CartProduct[] }) => any
    netPriceSum: number
    grossPriceSum: number
    afa: number
}

const useCart = (): ReturnType => {
    const [countBasket, setCountBasket] = useState<number>(0)
    const [productsInBasket, setProductsInBasket] = useState<CartProduct[]>([])

    const updateBasketList = useCallback((event: any) => {
        const { detail } = event
        setProductsInBasket(detail)
        setProductsInfo(detail)
        localStorage.setItem(StorageKeys.CartProduct, JSON.stringify(detail))
    }, [])

    const netPriceSum = Math.round(
        productsInBasket.reduce(
            (accumulator, currentValue) => accumulator + currentValue.product.startingPrice * currentValue.count,
            0,
        ),
    )

    const grossPriceSum = Math.round(
        productsInBasket.reduce(
            (accumulator, currentValue) =>

                accumulator +
                (currentValue.count * currentValue.product.startingPrice * (100 - currentValue?.product.startingPrice)) /
                100,
            0,
        ),
    )
    const afa = grossPriceSum - netPriceSum

    useEffect(() => {
        const productsList = getBasket()

        setProductsInfo(productsList)
        setProductsInBasket(productsList)
        window.addEventListener('updateBasketList', updateBasketList)

        return () => {
            window.removeEventListener('updateBasketList', updateBasketList)
        }
    }, [updateBasketList, netPriceSum])

    const getBasket = (): CartProduct[] => {
        const savedProductsStr = localStorage.getItem(StorageKeys.CartProduct)
        if (!savedProductsStr) return []

        try {
            return JSON.parse(savedProductsStr)
        } catch (error) {
            return []
        }
    }

    const setProductsInfo = (productsList: CartProduct[]) => {
        const { total } = productsList?.reduce(
            (acc: { total: number }, product: CartProduct) => {
                acc.total += product.count
                return acc
            },
            { total: 0 },
        )

        setCountBasket(total)
    }

    const deleteFromCart = (productNumberId: string, count: number | string = 1) => {
        const newList = productsInBasket.reduce((list: CartProduct[], product) => {
            if (product.product.productId !== productNumberId) {
                list.push(product)
                return list
            }

            if (count === 'all' || product.count - Number(count) <= 0) {
                return list
            }

            product.count -= Number(count)
            list.push(product)

            return list
        }, [])

        setAllBasket(newList)
    }

    const setProductCount = (product: Product, count: number = 1) => {
        const list = [...productsInBasket]
        const basketProductIndex = list.findIndex(
            basketProduct => basketProduct.product.productId === product.productId,
        )

        if (basketProductIndex === -1) {
            list.push({
                product: product,
                createdAt: new Date().getDate(),
                count,
            })
        } else {
            list[basketProductIndex].count = count
        }

        setAllBasket(list)
    }

    const getProductCount = (product: Product): number => {
        const basketProductIndex = productsInBasket.find(
            basketProduct => basketProduct.product.productId === product.productId,
        )
        return basketProductIndex?.count || 0
    }

    const emptyBasket = () => {
        setAllBasket([])
    }

    const setBasketListByCode = (data: { code: string; products: CartProduct[] }) => {
        if (!data?.products) return
        setAllBasket(data.products)
    }

    const setAllBasket = (basketList: CartProduct[]) => {
        window.dispatchEvent(
            new CustomEvent('updateBasketList', {
                detail: basketList,
            }),
        )
    }

    return {
        productsInBasket,
        countBasket,
        deleteFromCart,
        setProductCount,
        getProductCount,
        emptyBasket,
        setBasketListByCode,
        netPriceSum,
        grossPriceSum,
        afa,
    }
}

export default useCart
