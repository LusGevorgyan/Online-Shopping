import React from 'react'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import useCart from '@/src/hooks/useCart'
import useWishList from '@/src/hooks/useWishList'

import { LinkButton } from '@/src/components/global/Buttons'
import { SearchInput } from '@/src/components/global/Input'
import WishListIcon from '@/src/assets/icons/wishlist.svg'
import SearchIcon from '@/src/assets/icons/search.svg'
import CartIcon from '@/src/assets/icons/cart.svg'

const NavLink = [
    { path: '/', title: 'header.navbar.home.title' },
    { path: '/contact-us', title: 'header.navbar.contact.title' },
    { path: '/about', title: 'header.navbar.about.title' },
    { path: '/sign-in', title: 'header.navbar.sign-in.title' },
]

const NavBar = () => {
    const router = useRouter()
    const locale = [{ pName: "English", value: 'en' }, { pName: "Armenia", value: 'am' }]
    const handleRoute = (locale: string) => router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, { locale: false })
    const { productsInBasket } = useCart()
    const { productsInWishList } = useWishList()

    return (
        <header className='w-full'>
            <div className='flex justify-between w-full items-center py-4 bg-black text-white px-4 sm:px-8 md:px-16 lg:pr-32 xl:pl-96'>
                <p className='font-medium text-sm' >
                    <FormattedMessage id='header.title'/>
                    <LinkButton
                        label='header.shopNow.title'
                        href='/checkout'
                    />
                </p>

                <select
                    className='bg-black cursor-pointer border-none'
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleRoute(event.target.value)}
                >
                    {locale.map((localeName, index) => {
                        return (
                            <option value={localeName.value} key={index}>
                                {localeName.pName}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className='w-full bg-white flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-4 shadow '>
                <div className='gap-40 flex it                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ems-center justify-between'>
                    <p
                        onClick={() => router.push('/')}
                        className='text-2xl cursor-pointer font-bold'
                    > Exclusive </p>

                    <ul className='hidden md:flex items-center w-full gap-12'>
                        {
                            NavLink.map(link => <li
                                key={link.path}
                                onClick={() => router.push(link.path)}
                                className={`${link.path === router.pathname && ' border-b-2 border-gray-600'} text-black cursor-pointer`}
                            > <FormattedMessage id={link.title}/> </li> )
                        }
                    </ul>
                </div>

                <div className='flex items-center gap-6'>
                    <SearchInput
                        className='bg-gray-100 border-2 px-3 border-white text-gray-600'
                        placeholder='header.search.placeholder'
                        icon={<SearchIcon />}
                    />

                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            <WishListIcon
                                stroke={'black'}
                                onClick={() => productsInWishList.length > 0 && router.push('/wishlist')}
                                className='cursor-pointer'
                                height='32' width='32' viewBox='0 0 32 32'
                            />
                            {
                                productsInWishList.length >= 1 &&
                                    <div className='absolute -right-1 -top-2 flex items-center justify-center rounded-full bg-red-500 text-white w-6 h-6'>
                                        {productsInWishList.length}
                                    </div>
                            }
                        </div>

                        <div className='relative'>
                            <CartIcon
                                onClick={() => router.push('/cart')}
                                className='cursor-pointer'
                                height='32' width='32' viewBox='0 0 32 32'
                            />
                            {
                                productsInBasket.length >= 1 &&
                                    <div className='absolute -right-1 -top-2 flex items-center justify-center rounded-full bg-red-500 text-white w-6 h-6'>
                                        {productsInBasket.length}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
