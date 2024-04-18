import fetch from "node-fetch";
import * as cheerio from "cheerio";

type SearchResult = {
  name: string;
  id: string;
};

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

function parseId(url: string) {
  const regex = /\/players\/[a-z]\/([a-z]+[0-9]+)\.html/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  } else {
    return "";
  }
}

export async function searchPlayers(
  search: string
): Promise<Array<SearchResult>> {
  if (search === "") return [];
  const result = await fetch(
    `https://www.basketball-reference.com/search/search.fcgi?search=${search}`
  );
  console.log("Search Response Status: ", result.status);
  const body = await result.text();
  const $ = cheerio.load(body);
  const scrapedData = [];
  const players = $("#players > div.search-item > div.search-item-name a");
  console.log("PLAYERS: ", players.text());
  players.each((_, element) => {
    scrapedData.push({
      name: $(element).text(),
      id: parseId($(element).attr("href")),
    });
  });

  if (scrapedData.length === 0) {
    // if there is only one result, BBR pushes directly to the profile page
    // so attempt to get as player profile instead
    console.log("No Players: ", $("h1").text());
    scrapedData.push({
      name: $("h1 > span").text(),
      id: parseId(result.url),
    });
  }
  return scrapedData;
}

export async function getPlayer(id: string): Promise<string> {
  const result = await fetch(
    `https://www.basketball-reference.com/players/${id[0]}/${id}.html`
  );
  const body = await result.text();
  const $ = cheerio.load(body);
  return await $("h1 > span").text();
}
