import React from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckboxTextInput, SearchInput } from '@/src/components/global/Input'
import { billingAddressFormSchema } from '@/src/components/billing-details/billing-details.type'

type billingAddressFormSchemaType = z.infer<typeof billingAddressFormSchema>

const FormBillingDetails = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid, isSubmitted, touchedFields },
    } = useForm<billingAddressFormSchemaType>({
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            companyName: '',
            streetAddress: '',
            apartmentFloor: '',
            city: '',
            phoneNumber: '',
            email:  '',
        },
        resolver: zodResolver(billingAddressFormSchema),
    })

    const formProjectHasError = errors.firstName || errors.streetAddress || errors.city || errors.phoneNumber || errors.email
    const isDisabledButton = !!formProjectHasError

    const onSubmit: SubmitHandler<billingAddressFormSchemaType> = data => {
        console.log(data, 'Contact Us Form Information')
    }

    return (
        <form className='flex w-full flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-8 justify-between'>
                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='First Name*'
                    register={register('firstName')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.firstName?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Company Name'
                    register={register('companyName')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.companyName?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Street Address*'
                    register={register('streetAddress')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.streetAddress?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Apartment, floor, etc. (optional)'
                    register={register('apartmentFloor')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.apartmentFloor?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Town/City*'
                    register={register('city')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.city?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Phone Number*'
                    register={register('phoneNumber')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.phoneNumber?.message : ''}
                />

                <SearchInput
                    className='w-full bg-gray-100 border-2 border-white text-gray-600'
                    placeholder='Email Address*'
                    register={register('email')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.email?.message : ''}
                />

                <div className='flex items-center gap-4'>
                    <CheckboxTextInput className='bg-red-500'/>
                    <p className=''> Save this information for faster check-out next time </p>
                </div>
            </div>
        </form>
    )
}
export default FormBillingDetails
