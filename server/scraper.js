const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  const page = await browser.newPage();

  try {
    await Promise.all([
      page.waitFor('div.siimple-box > a'),
      page.goto('https://blog.naoki85.me')
    ]);
    const title = await page.$x('//a[contains(text(),"naoki85.me")]');
    if (title.length === 0) {
      throw "Error occured";
    }

    await Promise.all([
      page.waitFor('h1.siimple-h1'),
      page.click('div.siimple-box > a')
    ]);

    const dateElement = await page.$('div.body-1.grey--text');
    const dateText = await page.evaluate(element => element.textContent, dateElement);
    const pattern = /\d{4}-\d{2}-\d{2}/g;
    const result = dateText.match(pattern);
    if (!result) {
      throw "No dateText";
    }

    return true;
  } catch (error) {
    console.log(error);
    throw 'Test failed!!';
  } finally {
    await browser.close();
  }
})();
