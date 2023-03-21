export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@storyblok/nuxt"],
    storyblok: {
        accessToken: process.env.STORYBLOK_API_TOKEN,
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
    ssr: process.env.NUXT_ENV === "development" ? false : true,
});
