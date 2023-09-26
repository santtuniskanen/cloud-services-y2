const browserObject = require('./browser.js');
const scraperController = require('./pageController.js');

let browserInstance = browserObject.startBrowser();

scraperController(browserInstance)
