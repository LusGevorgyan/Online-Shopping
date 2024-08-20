import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.css'
import '../../app/style/global.css'

import React, { useMemo } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { NextFontWithVariable } from '@next/font'
import { Rubik } from '@next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

import { IntlProvider } from 'react-intl'
import { ToastContainer } from 'react-toastify'

import en from '../lang/en.json'
import am from '../lang/am.json'
import Layout from "@/src/components/global/Layout"

const rubik = Rubik({
    display: 'swap',
    subsets: [],
    variable: '--font-rubik',
}) as NextFontWithVariable

const messageMap: Record<string, Record<string, string>> = { en, am }

const App = ({ Component, pageProps }: AppProps) => {
    const { locale } = useRouter()
    const [shortLocale] = locale ? locale.split('-') : ['en']

    const messages = useMemo(() => {
        return shortLocale ? messageMap[shortLocale] : {}
    }, [shortLocale || ''])
    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
                    <ToastContainer rtl limit={2} />
                    <Layout font={rubik}>
                        <Component {...pageProps} />
                    </Layout>
                </IntlProvider>
            </QueryClientProvider>
        </>
    )
}

export default App
