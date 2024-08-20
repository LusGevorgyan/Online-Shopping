import React from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userFormSchema } from '@/src/components/signIn/user.type'
import { Buttons } from '@/src/components/global/Buttons'
import { SearchInput } from '@/src/components/global/Input'

type UserFormSchemaType = z.infer<typeof userFormSchema>

const SignInForm = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid, isSubmitted, touchedFields },
    } = useForm<UserFormSchemaType>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email:  '',
            password:  '',
        },
        resolver: zodResolver(userFormSchema),
    })

    const formProjectHasError = errors.email && errors.password
    const isDisabledButton = !!formProjectHasError

    const onSubmit: SubmitHandler<UserFormSchemaType> = data => {
        console.log(data, 'User Form Information')
    }

    return (
        <div className='flex w-full flex-col gap-10 items-start'>
            <div className='flex flex-col gap-6'>
                <p className='text-4xl font-bold'>Log in to Exclusive</p>
                <p>Enter your details below</p>
            </div>

            <form className='flex w-full flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
                <SearchInput
                    className='px-0 border-b-2 border-gray-300 w-full'
                    placeholder='Name'
                    register={register('name')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.name?.message : ''}
                />

                <SearchInput
                    className='px-0 border-b-2 border-gray-300 w-full'
                    placeholder='Email or Phone Number'
                    register={register('email')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.email?.message : ''}
                />

                <SearchInput
                    className='px-0 border-b-2 border-gray-300 w-full'
                    placeholder='Password'
                    register={register('password')}
                    errorMessage={isSubmitted || formProjectHasError ? errors.password?.message : ''}
                />
                <div className='flex items-center justify-between'>
                    <Buttons
                        disabled={isDisabledButton}
                        buttonType='submit'
                        title='Log in'
                        onClick={() => console.log(5456)}
                    />

                    <p className='text-[#DB4444] cursor-pointer'> Forget Password? </p>
                </div>
            </form>
        </div>
    )
}
export default SignInForm
