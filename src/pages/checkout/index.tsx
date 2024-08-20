import React from 'react'
import BillingDetailsCartInfo from '@/src/components/billing-details/BillingDetailsCartInfo'
import FormBillingDetails from '@/src/components/billing-details/FormBillingDetails'

const CheckoutPage = () => {
    return (
        <div className='flex w-full gap-44 items-center'>
            <div className='flex flex-col w-full gap-10'>
                <p className='text-4xl font-medium'>Billing Details</p>
                <FormBillingDetails />
            </div>
            <BillingDetailsCartInfo />
        </div>
    )
}

export default CheckoutPage
