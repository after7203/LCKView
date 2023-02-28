import Image from 'next/image'
import TeamFilter from './components/TeamFilter/TeamFilter'
import * as cheerio from 'cheerio';
import axios from 'axios'
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import MatchCard from './components/MatchCard/MatchCard';

export default function Home({ matches }: { matches: string }) {
  return (
    <>
      <div className='mx-auto' style={{ maxWidth: '1280px' }}>
        <div className='flex justify-center py-3'>
          <span className='p-2 text-3xl font-black'>2023 SPRING</span>
        </div>
        <div className='flex justify-center py-3 border-solid border-t border-b p-10'>
          {Array(12).fill('dummy').map((_, i) => (
            <div className='flex justify-center flex-auto font-bold' key={i + 1}>{i + 1}월</div>
          ))}
        </div>
        <TeamFilter />
        {JSON.parse(matches).map((matches: MatchCardType, idx: number) => (
          <MatchCard key={idx} matches={matches} />
        ))}
      </div>
    </>
  )
}

export type MatchCardType = {
  date: string,
  day_matches: {
    time: string,
    state: string,
    title: string,
    home: string,
    home_score: string,
    away: string,
    away_score: string
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://game.naver.com/esports/League_of_Legends/schedule/lck");
  const content = await page.content()
  const $ = cheerio.load(content)
  const lists = $(".card_item__3Covz").toArray();
  const matches = JSON.stringify(lists.map((list) => {
    return {
      date: $(list).find(".card_date__1kdC3").text(),
      day_matches: $(list).find(".row_item__dbJjy").toArray().map(el => {
        return {
          time: $(el).find(".row_time__28bwr").text(),
          state: $(el).find(".row_state__2RKDU").text(),
          title: $(el).find(".row_title__1sdwN").text(),
          home: $(el).find(".row_home__zbX5s .row_name__IDFHz").text(),
          home_score: $(el).find(".row_home__zbX5s .row_score__2RmGQ").text(),
          away: $(el).find(".row_away__3zJEV .row_name__IDFHz").text(),
          away_score: $(el).find(".row_away__3zJEV .row_score__2RmGQ").text()
        }
      })
    }
  }));
  return {
    props: {
      matches
    }
  }
}