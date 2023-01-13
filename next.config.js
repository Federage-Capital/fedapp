const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
}
