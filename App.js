const { compareAsc, format } = require("date-fns");
const puppeteer = require("puppeteer");
const fs = require("fs");

const date = format(new Date(), "dd-MM-yyy");
const path = `C:/Users/teeme/Desktop/Результат парсинга/${date}`;

const createDir = () => {
  fs.mkdir(path, (err) => {
    if (err) {
      console.log("не удалось создать папку или она уже существует");
    }
  });
};

(async () => {
  createDir();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "file:///C:/Users/teeme/AppData/Local/Temp/Rar$EXa23592.27179/PMControllingWeb.htm",
  );

  await page.setViewport({
    width: 3224,
    height: 6215,
    deviceScaleFactor: 1,
  });
  await page.screenshot({
    fullPage: true,
    // width: "1600px",
    captureBeyondViewport: false,
    path: `${path}/screen1.png`,
  });

  await browser.close();
})();
