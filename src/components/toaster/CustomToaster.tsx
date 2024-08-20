import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ToastProps } from './CustomToaster.type'

import Success from '@/src/assets/icons/success.svg'
import Error from '@/src/assets/icons/error.svg'
import Info from '@/src/assets/icons/info.svg'
import Warning from '@/src/assets/icons/warning.svg'

const toasts = {
    success: {
        color: 'green-500',
        icon: <Success color='green-500'/>,
    },
    error: {
        color: 'red-500',
        icon: <Error fill='white'/>,
    },
    warning: {
        color: 'orange-500',
        icon: <Warning fill='white'/>,
    },
    info: {
        color: 'gray-500',
        icon: <Info fill='white'/>,
    },
}

const CustomToaster: React.FC<ToastProps> = ({ text, type }) => {
    return (
        <div className={`bg-${toasts[type].color} flex items-center justify-end gap-2 text-${toasts[type].color}`}>
            <div className='btn-xs btn-circle btn absolute right-2 top-2 border-none bg-gray-extralight text-gray hover:bg-gray-light'>
                ✕
            </div>
            <p className='w-4/5 text-end text-black'>
                <FormattedMessage id={text} />
            </p>
            {toasts[type].icon}
        </div>
    )
}

export default CustomToaster
