var faker     = require('faker');
var puppeteer = require('puppeteer');


const AppURI = "http://arjaycodes.com/Indecision";


// Random input from Faker to generate options with.
let i = 0;
let optionsCount = 10;
let options = [];
while (i < optionsCount) {

    options.push(faker.random.words());
    i++;
}

// Puppeteer --
    // Browser-related Variables
    let page;
    let browser;
    let viewportWidth   = 1920;
    let viewportHeight  = 1080;
    let timeoutInterval = 16000;

    // Pretest Setup  - Jest
    beforeAll (async () => {

        browser = await puppeteer.launch({
            headless: false,
            slowMo:   80,
            args:     [`--window-size=${viewportWidth},${viewportHeight}`]
        });
        page = await browser.newPage();
        //await page.setViewport(viewportWidth, viewportHeight);
    });

    // Posttest Setup - Jest
    afterAll (async () => {

        browser.close();
    });

    // Test #1 - User should be able to input any data they choose into the input field (It is their own decisions after all).
    describe ("Choices Input Form", () => {
        test("User should be able to input any for of data they like, as it is up to them what choices they are trying to make.", async () => {

            await page.goto(AppURI);
            // Test Steps

        }, timeoutInterval);
    });
