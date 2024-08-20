import React from 'react'
import { toast } from 'react-toastify'

import CustomToaster from '@/src/components/toaster/CustomToaster'

const useToaster = () => {
    const success = (text: string) => toast.success(<CustomToaster text={text} type="success" />, ToastSetup)
    const error = (text: string) => toast.error(<CustomToaster text={text} type="error" />, ToastSetup)
    const info = (text: string) => toast.info(<CustomToaster text={text} type="info" />, ToastSetup)
    const warning = (text: string) => toast.warning(<CustomToaster text={text} type="warning" />, ToastSetup)

    return { success, error, info, warning }
}

export default useToaster

const ToastSetup = {
    icon: false,
    closeButton: false,
}