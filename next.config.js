/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'am'],
        defaultLocale: 'am',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        const rules = config.module.rules.map(rule => {
            if (!rule.oneOf) return rule
            return {
                ...rule,
                oneOf: rule.oneOf.map(ruleObject => {
                    if (!new RegExp(ruleObject.test).test('.ts') || !ruleObject.include) return ruleObject
                    return { ...ruleObject, include: undefined }
                }),
            }
        })
        config.module.rules = rules

        return config
    },

}

module.exports = nextConfig
