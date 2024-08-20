import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

export interface BaseButtonProps {
    title?: string
    onClick?: () => void
    className?: string
}

export interface ButtonProps extends BaseButtonProps {
    disabled?: boolean
    buttonType?: 'submit' | 'button' | 'reset'
}

export const Buttons: React.FC<ButtonProps> = ({ title, className, onClick, disabled, buttonType }) => {
    const text = useIntl()
    const translatedButtonTitle = text.formatMessage({ id: title })

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={buttonType}
            className={`${className ? className : 'bg-button-bg text-white'} cursor-pointer rounded py-4 px-12`}
        >
            {translatedButtonTitle}
        </button>
    )
}

export const LinkButton: React.FC<{ className?: string, href: string, label: string }> = ({
    className,
    href,
    label,
}) => {
    const text = useIntl()
    const translatedTextTitle = text.formatMessage({id: label})

    return (
        <Link className={`cursor-pointer ${className ? className : 'px-2 underline font-semibold'}`} href={href}>
            {translatedTextTitle}
        </Link>
    )
}