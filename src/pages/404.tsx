import React from 'react'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { Buttons } from '@/src/components/global/Buttons'

export default function Custom404() {
    const router = useRouter()

    return (
        <div className='flex flex-col gap-1 sm:gap-16 py-32 items-center justify-center w-full'>
            <h1 className='text-8xl w-full text-center font-medium'>
                404 <FormattedMessage id='404.not.found.title'/>
            </h1>
            <Buttons
                onClick={() => router.push('/')}
                title='404.not.found.button.title'
            />

            <p className='text-md sm:text-xl text-center font-light text-accent-focus'>
                <FormattedMessage id='404.not.found.description'/>
            </p>
        </div>
    )
}
