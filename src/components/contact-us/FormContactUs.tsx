import React from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactUsFormSchema } from '@/src/components/contact-us/contact-us.type'
import {SearchInput, TextAreaInput} from '@/src/components/global/Input'
import { Buttons } from '@/src/components/global/Buttons'

type ContactUSFormSchemaType = z.infer<typeof contactUsFormSchema>

const FormContactUs = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid, isSubmitted, touchedFields },
    } = useForm<ContactUSFormSchemaType>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email:  '',
            phoneNumber: '',
            notes:  '',
        },
        resolver: zodResolver(contactUsFormSchema),
    })

    const formProjectHasError = errors.name || errors.email || errors.phoneNumber
    const isDisabledButton = !!formProjectHasError

    const onSubmit: SubmitHandler<ContactUSFormSchemaType> = data => {
        console.log(data, 'Contact Us Form Information')
    }

    return (
        <div className='flex p-10 w-full flex-col gap-10 items-start'>
            <form className='flex w-full flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center w-full gap-4 justify-between'>
                    <SearchInput
                        className='bg-gray-100 border-2 border-white text-gray-600'
                        placeholder='contact.form.name.placeholder'
                        register={register('name')}
                        errorMessage={isSubmitted || formProjectHasError ? errors.name?.message : ''}
                    />

                    <SearchInput
                        className='bg-gray-100 border-2 border-white text-gray-600'
                        placeholder='contact.form.email.placeholder'
                        register={register('email')}
                        errorMessage={isSubmitted || formProjectHasError ? errors.email?.message : ''}
                    />

                    <SearchInput
                        className='bg-gray-100 border-2 border-white text-gray-600'
                        placeholder='contact.form.phone.placeholder'
                        register={register('phoneNumber')}
                        errorMessage={isSubmitted || formProjectHasError ? errors.phoneNumber?.message : ''}
                    />
                </div>

                <TextAreaInput
                    placeholder='contact.form.notes.placeholder'
                    register={register('notes')}
                    className='bg-gray-100 w-full border-2 border-white text-gray-600'
                />
                <div className='flex items-center justify-end'>
                    <Buttons
                        disabled={isDisabledButton}
                        buttonType='submit'
                        title='contact.form.button'
                        onClick={() => console.log(5456)}
                    />
                </div>
            </form>
        </div>
    )
}
export default FormContactUs
