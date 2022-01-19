const puppeteer = require('puppeteer');

(async() => {

    console.log('Starting...');
    let url = 'http://www.worldfloraonline.org/taxon/wfo-0000948337';

    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    console.log('Opening page...');

    await page.goto(url, { waitUntil: 'networkidle2' });

    let data = await page.evaluate(() => {
        let name = document.getElementsByClassName("taxonName")[0].innerText;
        return {
            plant_name: name,
        };
    });
    console.log('data: ', data);

    debugger;

    await browser.close();

})();
