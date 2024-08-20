import React from 'react'
import ContactInformation from '@/src/components/contact-us/ContactInformation'
import FormContactUs from '@/src/components/contact-us/FormContactUs'

const ContactUsPage = () => {
    return (
        <div className='flex items-center w-full justify-between'>
            <ContactInformation />
            <FormContactUs />
        </div>
    )
}

export default ContactUsPage
