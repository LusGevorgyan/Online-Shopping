import React from 'react'
import { useIntl } from 'react-intl'
import Head from 'next/head'
import ProductList from '@/src/components/products/ProductList'
import mockProductsData from '@/src/mockProductData'

const Home = () => {
    const intl = useIntl()
    const title = intl.formatMessage({ id: 'website.name' })
    const description = intl.formatMessage({ id: 'website.name' })

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                {/* Add hreflang links */}
                <link rel='alternate' href='http://example.com' hrefLang='x-default' />
                <link rel='alternate' href='http://example.com' hrefLang='hu' />
                <link rel='alternate' href='http://example.com/en' hrefLang='en' />
            </Head>

            <div className='flex w-full flex-wrap items-center justify-between gap-y-16 gap-x-7'>
                { mockProductsData.map(data => <ProductList key={data.productId} {...data}/>) }
            </div>
        </>
    )
}

export default Home
