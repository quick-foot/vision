// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const reporters = process.env.TRAVIS ? ['dots'] : ['progress', 'kjhtml'];
const browsers = process.env.TRAVIS ? ['ChromeHeadlessNoSandbox'] : ['Chrome'];
const colors = process.env.NOCOLOR || process.env.TRAVIS ? false : true;

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../../coverage'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        reporters,
        port: 9876,
        colors,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers,
        singleRun: false,
        restartOnFileChange: true
    });
};
