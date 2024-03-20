const puppeteer = require("puppeteer");

const HO_XUAN_HUONG_LINK =
  "http://thomay.vn/thomay/index.php?q=tungcau&t=L%E1%BB%A5c%20b%C3%A1t&s=H%E1%BB%93%20Xu%C3%A2n%20H%C6%B0%C6%A1ng";

const PAGE = {
  ADD_PARAGRAPH_BUTTON: 'input[name="fullbaitho"]',
  PARAGRAPH_RESULT: '.paragraph font[color="Blue"]',
};

async function pipeline() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await (await browser).newPage();
  await page.goto(HO_XUAN_HUONG_LINK);
  await page.waitForSelector(PAGE.ADD_PARAGRAPH_BUTTON);
  await page.click(PAGE.ADD_PARAGRAPH_BUTTON);
  await page.waitForSelector(PAGE.PARAGRAPH_RESULT);
  const inner_paragraph_html = await page.$eval(
    PAGE.PARAGRAPH_RESULT,
    (element) => element.innerHTML
  );
  console.log(
    inner_paragraph_html
      .split("<br>")
      .map((sentence) => sentence.replaceAll("&nbsp;", "").trim())
      .filter((sentence) => !!sentence)
      .join(",") + "."
  );
  await page.close();
  await browser.close();
}

pipeline();
