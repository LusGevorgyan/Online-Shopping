import React from 'react'
import { FormattedMessage } from 'react-intl'

const TotalCartInformation: React.FC<{
    netPriceSum: number
}> = ({netPriceSum}) => {

    return (
        <div>
            <div className='py-4 flex justify-between items-center border-b-2 border-gray-300'>
                <p><FormattedMessage id='cart.subtotal.title'/>:</p>
                <p className='text-sm font-light'>${netPriceSum}</p>
            </div>

            <div className='py-4 flex justify-between items-center border-b-2 border-gray-300'>
                <p><FormattedMessage id='cart.shipping.title'/>:</p>
                <p className='text-sm font-light'>
                    <FormattedMessage id='cart.free.title'/>
                </p>
            </div>

            <div className='py-4 flex justify-between items-center border-b-2 border-gray-300'>
                <p><FormattedMessage id='cart.total.title'/>:</p>
                <p className='text-sm font-light'>${netPriceSum}</p>
            </div>
        </div>
    )
}

export default TotalCartInformation
