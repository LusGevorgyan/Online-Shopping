interface Colors {
    productId: number,
    code: string,
    name: string,
    photo: string,
    startingPrice: number
}

interface Size {
    sizeCode: string
}

export interface Product {
    productId: number | string,
    name: string,
    description: string,
    rating: number,
    startingPrice: number,
    count: number,
    disCount: number,
    photo: string,
    productStatus?: string,
    photosX60?: string,
    colors: Colors[],
    size: Size[]
}

export interface CartProduct {
    product: Product
    createdAt: number
    count: number
}

export interface WishListProduct {
    product: Product
}