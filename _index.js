const request = require("request-promise");
const cheerio = require("cheerio");

// borrowed + tweaked from https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b
async function main() {
  const result = await request.get(
    "https://www.basketball-reference.com/friv/teammates_and_opponents.fcgi?pid=griffbl01&type=t#teammates-and-opponents"
  );
  const $ = cheerio.load(result);
  const scrapedData = [];
  $("#teammates-and-opponents > tbody > tr").each((_, element) => {
    const tds = $(element).find("td");
    const name = $(tds[0]).text();
    if (/williams/i.test(name)) {
      scrapedData.push(name);
    }
  });
  console.log(scrapedData);
}

main();
