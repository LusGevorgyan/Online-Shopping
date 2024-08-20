import React, { HTMLProps, ReactNode } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

interface SearchProps extends HTMLProps<HTMLInputElement> {
    label?: string
    register?: any
    optional?: boolean
    className?: string
    icon?: ReactNode
    errorMessage?: string
}

export const SearchInput: React.FC<SearchProps> = ({
    placeholder,
    onChange,
    className,
    value,
    register,
    icon,
    errorMessage
}) => {
    const text = useIntl()
    const translatedSearchPlaceholder = text.formatMessage({ id: placeholder })

    return (
        <div className='relative gap-1'>
            <input
                value={value}
                onChange={onChange}
                type='text'
                placeholder={translatedSearchPlaceholder}
                className={`${className} input input-sm relative py-3 px-4 rounded`}
                {...register}
            />
            <div className='cursor-pointer absolute bottom-3.5 right-3 text-gray'>
                {icon}
            </div>

            {errorMessage && (
                <span className="flex items-center gap-2 px-2 pt-1 text-xs text-[#DB4444]">
                    <FormattedMessage id={errorMessage}/>
                </span>
            )}
        </div>
    )
}

export const TextAreaInput: React.FC<SearchProps> = ({ placeholder, register, onChange, className }) => {
    const text = useIntl()
    const translatedSearchPlaceholder = text.formatMessage({ id: placeholder })

    return (
        <div className="form-control relative w-full">
            <textarea
                placeholder={translatedSearchPlaceholder}
                className={`h-52 py-3 px-4 w-full rounded-lg ${className}`}
                onChange={onChange}
                {...register}
            />
        </div>
    )
}

interface CheckboxTextInputProps extends SearchProps {
    className?: string
    handleClick?: any
    isChecked?: boolean
}

export const CheckboxTextInput: React.FC<CheckboxTextInputProps> = ({
    handleClick,
    isChecked,
    register,
    className,
}) => {
    return (
        <input
            id='checked-form'
            onChange={handleClick}
            checked={isChecked}
            type='checkbox'
            className={`w-5 h-5 cursor-pointer checkbox-md rounded-md ${className}`}
            {...register}
        />
    )
}