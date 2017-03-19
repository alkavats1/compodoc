var webdriverio = require('webdriverio'),
    client = webdriverio.remote({
        desiredCapabilities: {
            browserName: 'chrome',
            version: '27',
            platform: 'XP',
            name: 'This is an example test',
            'public': true
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'verbose'
    }).init();

client
    .url('http://google.com')
    .setValue('*[name="q"]','webdriverio')
    .click('*[name="btnG"]')
    .pause(1000)
    .getTitle(function(err,title) {
        console.log(title);
    })
    .end();
