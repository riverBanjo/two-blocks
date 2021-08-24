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
    devtool:                'cheap-eval-source-map',
    module: {
        rules: [
            {
                test:       /\.js$/,
                exclude:    /(node_modules)/,
                use:        'babel-loader',
            }
        ]
    }
};
