import fetch from "node-fetch";
import * as cheerio from "cheerio";

export async function getWilliams(playerId: string): Promise<Array<string>> {
  const result = await fetch(
    `https://www.basketball-reference.com/friv/teammates_and_opponents.fcgi?pid=${playerId}&type=t#teammates-and-opponents`
  );
  const body = await result.text();
  const $ = cheerio.load(body);
  const scrapedData = [];
  $("#teammates-and-opponents > tbody > tr").each((_, element) => {
    const tds = $(element).find("td");
    const name = $(tds[0]).text();
    if (/williams/i.test(name)) {
      scrapedData.push(name);
    }
  });
  return scrapedData;
}
