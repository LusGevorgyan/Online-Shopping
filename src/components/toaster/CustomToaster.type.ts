export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
    text: string
    type: ToastType
}
