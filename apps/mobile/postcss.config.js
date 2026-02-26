module.exports = {
    plugins: [
        require('react-strict-dom/postcss-plugin')({
            include: [
                'src/**/*.{js,jsx,mjs,ts,tsx}',
                'App.{js,jsx,ts,tsx}',
                '.expo/**/*.{js,jsx,mjs,ts,tsx}',
                // Include the actual packages/ui workspace where strict dom is used!
                '../../packages/ui/**/*.{js,jsx,ts,tsx}'
            ]
        }),
        require('autoprefixer')
    ]
};
