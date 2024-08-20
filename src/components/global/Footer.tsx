import React from 'react'
import { FormattedMessage } from 'react-intl'
import { SearchInput } from '@/src/components/global/Input'
import { LinkButton } from '@/src/components/global/Buttons'

import QrCode from '../../assets/icons/qr-code.svg'
import GooglePlay from '../../assets/icons/google-play.svg'
import AppStore from '../../assets/icons/app-store.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'

import TwitterIcon from '../../assets/icons/twitter.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import SendIcon from '../../assets/icons/send.svg'

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col text-white bg-black'>
            <div className='flex flex-col px-32 py-20'>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col gap-6 items-start'>
                        <p className='text-2xl font-bold'>Exclusive</p>
                        <p className='text-xl font-medium cursor-pointer'>
                            <FormattedMessage id='footer.subscribe.title'/>
                        </p>
                        <p className='font-medium text-sm'>
                            <FormattedMessage id='footer.subscribe.info'/>
                        </p>
                        <SearchInput
                            className='bg-black border-2 border-white text-gray-600'
                            placeholder='footer.search.placeholder'
                            icon={<SendIcon />}
                        />
                    </div>

                    <div className='flex flex-col gap-6 items-start'>
                        <p className='text-xl font-medium'>
                            <FormattedMessage id='footer.support.title'/>
                        </p>
                        <p className='font-medium text-sm' >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='font-medium text-sm' >exclusive@gmail.com</p>
                        <p className='font-medium text-sm' >+88015-88888-9999</p>
                    </div>

                    <div className='flex flex-col gap-6 items-start'>
                        <p className='text-xl font-medium'>
                            <FormattedMessage id='footer.account.title'/>
                        </p>
                        <LinkButton label='footer.my.account.title' href='/profile' className='font-medium text-sm' />
                        <LinkButton label='footer.login.title' href='/sign-in' className='font-medium text-sm' />
                        <LinkButton label='footer.cart.title' href='/cart' className='font-medium text-sm' />
                        <LinkButton label='footer.wishlist.title' href='/wishlist' className='font-medium text-sm' />
                        <LinkButton label='footer.shop.title' href='/' className='font-medium text-sm' />
                    </div>

                    <div className='flex flex-col gap-6 items-start'>
                        <p className='text-xl font-medium'>
                            <FormattedMessage id='footer.quick.link.title'/>
                        </p>
                        <LinkButton label='footer.PP.title' href='#' className='font-medium text-sm' />
                        <LinkButton label='footer.TS.title' href='#' className='font-medium text-sm' />
                        <LinkButton label='footer.FAQ.title' href='#' className='font-medium text-sm' />
                        <LinkButton label='footer.contact.title' href='/contact-us' className='font-medium text-sm' />
                    </div>

                    <div className='flex flex-col gap-6 items-start'>
                        <p className='text-xl font-medium'>
                            <FormattedMessage id='footer.download.app.title'/>
                        </p>
                        <p><FormattedMessage id='footer.download.app.description'/></p>
                        <div className='flex gap-3 h-auto'>
                            <QrCode className='cursor-pointer'/>
                            <div className='flex flex-col'>
                                <GooglePlay className='cursor-pointer'/>
                                <AppStore className='cursor-pointer'/>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <FacebookIcon className='cursor-pointer'/>
                                <TwitterIcon className='cursor-pointer'/>
                            <InstagramIcon className='cursor-pointer'/>
                            <LinkedinIcon className='cursor-pointer'/>
                        </div>
                    </div>

                </div>
            </div>

            <div className='py-6 bg-black shadow border-t-[0.5px] border-gray-500'>
                <p className='text-xs text-gray-500 text-center font-normal '>
                    &copy; Copyright Exclusive {(new Date().getFullYear())}. <FormattedMessage id='footer.reserved.title' />
                </p>
            </div>
        </footer>
    )
}
export default Footer
