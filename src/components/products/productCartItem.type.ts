import { StaticImageData } from 'next/image'

interface Colors {
    productId: number;
    code: string;
    name: string;
    photo: StaticImageData | string;
    startingPrice: number;
}

interface Size {
    sizeCode: string
}

export interface Product {
    productId: number;
    name: string;
    description?: string;
    rating: number;
    startingPrice: number;
    count: number;
    disCount: number;
    photo: StaticImageData | string;
    productStatus?: string;
    photosX60?: (StaticImageData | string)[];
    colors?: Colors[];
    size?: Size[];
}

export interface CartProduct {
    product: Product
    createdAt: number
    count: number
}

export interface WishListProduct {
    product: Product
}