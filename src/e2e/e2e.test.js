import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("popovers", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // чтобы показывать реальный браузер
      slowMo: 250,
      // devtools: true, // чтобы видеть инструменты разработчика
    });
    page = await browser.newPage(); //браузер открывает страницу
  });
  //закрывает браузер
  afterAll(async () => {
    await browser.close();
  });

  test("popovers show on page", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container");
    const button = await page.$(".btn");
    await button.click();
    await page.waitForSelector(".popovers");
  });
});