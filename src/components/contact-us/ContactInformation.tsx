import React from 'react'
import { FormattedMessage } from 'react-intl'
import PhoneIcon from '@/src/assets/icons/phone.svg'
import EmailIcon from '@/src/assets/icons/email.svg'

const ContactInformation = () =>{
    return (
        <div className='flex p-10 w-full flex-col items-start gap-8'>
            <div className='flex flex-col items-start gap-6 w-full pb-8 border-b-2 border-black'>
                <div className='flex gap-4 items-center'>
                    <div className='flex p-3 rounded-full items-center justify-center bg-[#DB4444]'>
                        <PhoneIcon />
                    </div>
                    <p className='text-lg font-medium'>
                        <FormattedMessage id='contact.call.title' />
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-light'>
                        <FormattedMessage id='contact.available.title'/>
                    </p>
                    <p className='text-sm font-light'>
                        <FormattedMessage id='contact.phone.title'/>: +8801611112222
                    </p>
                </div>
            </div>

            <div className='flex flex-col w-full items-start gap-6'>
                <div className='flex gap-4 items-center'>
                    <div className='flex p-3 rounded-full items-center justify-center bg-[#DB4444]'>
                        <EmailIcon />
                    </div>
                    <p className='text-lg font-medium'>
                        <FormattedMessage id='contact.write.title'/>
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-light'>
                        <FormattedMessage id='contact.contact.title'/>
                    </p>
                    <p className='text-sm font-light'>
                        <FormattedMessage id='contact.emails.title'/>: customer@exclusive.com
                    </p>
                    <p className='text-sm font-light'>
                        <FormattedMessage id='contact.emails.title'/>: support@exclusive.com
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContactInformation
