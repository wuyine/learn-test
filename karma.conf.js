// Karma configuration
// Generated on Sat Dec 23 2017 15:02:03 GMT+0800 (中国标准时间)

var webpack = require('webpack');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      // 这里，只需要写['mocha']，即可，不能写成['mocha','jasmine']
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
        'test/*.spec.js',//这个路径是相对于basePath
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      //使用webpack 预处理
    preprocessors: {
        '**/*.spec.js':['webpack','sourcemap'], 
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins:['karma-webpack','karma-mocha','karma-chrome-launcher','karma-jasmine','karma-sourcemap-loader','karma-coverage'],

    // optionally, configure the reporter 
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack:  {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, use: 'babel-loader',exclude:/node_modules/ },
          {test:/\.scss$/,use: ['style-loader',"css-loader","sass-loader"]},
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  })
};
