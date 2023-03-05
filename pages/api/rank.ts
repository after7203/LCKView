// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export type Data = {
  team: Array<string>;
  indicator: Array<Array<string>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `https://game.naver.com/esports/League_of_Legends/record/lck/team/lck_2023_spring`
  );
  const content = await page.content();
  const $ = cheerio.load(content);
  const team = new Array<string>();
  $(".record_list_team__2NtZO .record_list_item__2fFsp")
    .toArray()
    .forEach((element) => {
      team.push($(element).find(".record_list_name__27huQ").text());
    });
  const indicator = $(
    ".record_list_wrap_filter__1Ux0E .record_list_item__2fFsp"
  )
    .toArray()
    .map((el) =>
      $(el)
        .contents()
        .toArray()
        .map((el) => $(el).text())
    );
  res.status(200).json({
    team,
    indicator,
  });
}
