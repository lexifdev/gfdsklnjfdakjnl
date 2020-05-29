const path = require(`path`)
const webpack = require(`webpack`)


const MODE = process.env.NODE_ENV === `production` ? `production` : `development`
const PORT = 3000


const DEV_ENTRY = [
    `react-hot-loader/patch`,
    `webpack-dev-server/client?http://localhost:${PORT}/`
]

const config = {

    entry: [require.resolve(`./app/index.js`)],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: `babel-loader`,
                options: {
                    presets: [
                        `@babel/preset-env`,
                        `@babel/preset-react`
                    ],
                    plugins: [
                        `@babel/plugin-transform-runtime`,
                        `react-hot-loader/babel`
                    ]
                }
            }
        }]
    },
    resolve: {
        extensions: [`.js`],
        modules: [
            path.join(__dirname, `app`),
            `node_modules`
        ]
    },
    plugins: []
}

if (MODE === `development`) {
    config.entry = [...DEV_ENTRY, ...config.entry]

    config.resolve = {
        ...config.resolve,
    }
    config.resolve.alias = {
        'react-dom': `@hot-loader/react-dom`
    }

    config.plugins = [
        ...config.plugins,
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]

    config.output = {
        publicPath: `http://localhost:${PORT}/dist/`,
        filename: `app.dev.js`
    }

    config.devServer = {
        port: PORT,
        hot: true
    }
} else {
    config.mode = `production`

    config.output = {
        path: path.join(__dirname, `build`),
        filename: `app.prod.js`
    }

    config.plugins = [
        ...config.plugins,
        new webpack.EnvironmentPlugin({
            NODE_ENV: `production`
        }),
    ]
}


module.exports = config
