import React from 'react'

const BillingDetailsCartInfo: React.FC<{
    color?: string
}> = ({color}) => {
    return (
        <div className='flex gap-2'>
            <div className='inline-flex items-center'>
                <label
                    className={`relative flex cursor-pointer items-center rounded-full`}
                    htmlFor='ripple-on'
                    data-ripple-dark='true'
                >
                    <input
                        id='ripple-on'
                        name='ripple'
                        type='radio'
                        className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black`}
                        // checked
                    />
                    <div className={`pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[${color}]`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-3.5 w-3.5'
                            viewBox='0 0 16 16'
                            fill={color}
                        >
                            <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
                        </svg>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default BillingDetailsCartInfo