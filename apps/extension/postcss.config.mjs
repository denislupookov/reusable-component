import babelLoader from "./babel.config.js";

export default {
    plugins: {
        "react-strict-dom/postcss-plugin": {
            include: [
                'src/**/*.{js,jsx,mjs,ts,tsx}',
                '../../packages/ui/**/*.{js,jsx,ts,tsx}'
            ],
            babelConfig: babelLoader,
            useLayers: true,
        },
        "autoprefixer": {}
    },
};
