import React from 'react'
import Image from 'next/image'
import SideImage from '@/src/assets/images/Side Image.png'
import SignInForm from '@/src/components/signIn/SignInForm'

const SignUpPage = () => {
    return (
        <div className='flex w-full gap-32 items-center justify-between'>
            <Image src={SideImage} alt='side image' />
            <SignInForm />
        </div>
    )
}

export default SignUpPage
