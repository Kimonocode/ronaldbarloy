import { defineConfig } from "vite"

export default defineConfig({
    css: {
        devSourcemap:true,
        preprocessorOptions: {
            scss: {

            },
        },
    },
    json:{
        namedExports:true,
        stringify:true
    }
})
  