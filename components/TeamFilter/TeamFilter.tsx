import data from "public/data.json";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const TeamFilter = ({
  teamIdx,
  setTeamIdx,
}: {
  teamIdx: number;
  setTeamIdx: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mx-2 flex justify-center p-5 ">
      <div className="grid grid-cols-5 justify-center gap-x-6 rounded-md p-2 dark:bg-slate-600 dark:text-white md:grid-cols-10">
        {data.teams.map((team, idx) => (
          <div
            className="flex items-center justify-center rounded-md hover:cursor-pointer lg:pr-2"
            onClick={() => setTeamIdx(idx)}
            key={idx}
          >
            {teamIdx === idx ? (
              <>
                <Image
                  width={46}
                  height={46}
                  src={`/teams/${team["eng-name"]}.png`}
                  alt={`${team["kr-name"]} 로고`}
                ></Image>
                <span className="hidden w-9 justify-center whitespace-nowrap font-bold lg:flex">
                  {team["eng-name"]}
                </span>
              </>
            ) : (
              <>
                <Image
                  width={46}
                  height={46}
                  src={`/teams/${team["eng-name"].toLowerCase()}_tp.png`}
                  alt={`${team["kr-name"]} 로고`}
                ></Image>
                <span className="hidden w-9 justify-center whitespace-nowrap lg:flex">
                  {team["eng-name"]}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamFilter;
