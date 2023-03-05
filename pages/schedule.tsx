import TeamFilter from "../components/TeamFilter/TeamFilter";
import MatchCard from "../components/MatchCard/MatchCard";
import * as cheerio from "cheerio";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import puppeteer from "puppeteer";

const Schedule = ({ matches }: { matches: string }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="mx-auto px-4" style={{ maxWidth: "1280px" }}>
        <div className="flex justify-center py-3">
          <span className="p-2 text-3xl font-black dark:text-slate-300">
            2023 SPRING
          </span>
        </div>
        {/* <div className="flex justify-center border-t border-b border-solid p-10 py-3">
          {Array(12)
            .fill("dummy")
            .map((_, i) => (
              <div
                className="flex flex-auto justify-center font-bold"
                key={i + 1}
              >
                {i + 1}월
              </div>
            ))}
        </div> */}
        {/* <TeamFilter /> */}
        {matches &&
          JSON.parse(matches).map((matches: MatchCardType, idx: number) => (
            <MatchCard key={idx} matches={matches} />
          ))}
      </div>
    </>
  );
};

export type MatchCardType = {
  date: string;
  day_matches: Array<MatchType>;
};

export type MatchType = {
  time: string;
  state: string;
  title: string;
  home: string;
  home_logo: string;
  home_score: string;
  away: string;
  away_logo: string;
  away_score: string;
  stadium: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `https://game.naver.com/esports/League_of_Legends/schedule/lck`
  );
  const content = await page.content();
  const $ = cheerio.load(content);
  const lists = $(".card_item__3Covz").toArray();
  const matches = JSON.stringify(
    lists.map((list) => {
      return {
        date: $(list)
          .find(".card_date__1kdC3")
          .contents()
          .filter((idx, el) => el.type === "text")
          .text(),
        day_matches: $(list)
          .find(".row_item__dbJjy")
          .toArray()
          .map((el) => {
            return {
              time: $(el).find(".row_time__28bwr").text(),
              state: $(el).find(".row_state__2RKDU").text(),
              title: $(el).find(".row_title__1sdwN").text(),
              home: $(el).find(".row_home__zbX5s .row_name__IDFHz").text(),
              home_logo: $(el)
                .find(".row_home__zbX5s .row_logo__c8gh0")
                .attr("src"),
              home_score: $(el)
                .find(".row_home__zbX5s .row_score__2RmGQ")
                .text(),
              away: $(el).find(".row_away__3zJEV .row_name__IDFHz").text(),
              away_logo: $(el)
                .find(".row_away__3zJEV .row_logo__c8gh0")
                .attr("src"),
              away_score: $(el)
                .find(".row_away__3zJEV .row_score__2RmGQ")
                .text(),
              stadium: $(el).find(".row_stadium__UOBaJ").text(),
            };
          }),
      };
    })
  );
  return {
    props: {
      matches,
    },
  };
};

export default Schedule;
