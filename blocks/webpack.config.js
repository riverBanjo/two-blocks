const path              =   require( 'path' );
const webpack           =   require( 'webpack' );

module.exports          =   {
    entry:                  './app/index.js',
    output: {
        path:               path.resolve( __dirname, 'dist' ),
        filename:           'bundle.js',
    },
    mode:                   'development',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      },
    watch:                  true,
    // devtool:                'cheap-eval-source-map',
    module: {
        rules: [
            {
                test:       /\.js$/,
                exclude:    /(node_modules)/,
                use:        'babel-loader',
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                'style-loader',
                'css-loader',
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions:{
                            plugins: () => [
                                require("autoprefixer")()
                            ]
                        },
                    },
                },
                'sass-loader',
                ]
            }
        ]
    }
};
