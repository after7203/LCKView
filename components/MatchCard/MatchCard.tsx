import { MatchCardType } from "@/pages/schedule";
import Image from "next/image";

const MatchCard = ({ matches }: { matches: MatchCardType }) => {
  return (
    <div>
      <hr className="h-px border-0 bg-slate-200 dark:bg-slate-500" />
      <div className="bg-slate-100 p-4 text-xl font-extrabold dark:bg-gray-600 dark:text-gray-200">
        {matches.date}
      </div>
      {matches.day_matches.map((match, idx) => (
        <div key={idx}>
          <hr className="h-px border-0 bg-slate-200 dark:bg-slate-500" />
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4 dark:text-gray-200">
              <div className="text-base font-bold">{match.time}</div>
              {match.state === "종료" ? (
                <div className="rounded-md bg-slate-100 py-0.5 px-2 text-slate-400">
                  {match.state}
                </div>
              ) : (
                <div className="rounded-md bg-slate-100 py-0.5 px-2 text-slate-600">
                  {match.state}
                </div>
              )}
              <div className="text-sm text-slate-400">{match.title}</div>
            </div>
            {/* lg view */}
            <div className="m-auto hidden items-center gap-3 dark:text-gray-200 lg:flex">
              <div className="flex w-48 justify-end">{match.home}</div>
              <Image
                src={match.home_logo || "/teams/TBD.png"}
                alt={"home_logo"}
                width={32}
                height={32}
              />
              <div className="flex w-16 justify-center gap-2 text-xl font-bold text-slate-300">
                {match.home_score ? (
                  <>
                    {match.home_score !== "2" ? (
                      <div className="text-slate-500 dark:text-gray-500">
                        {match.home_score}
                      </div>
                    ) : (
                      <div className="text-slate-900 dark:text-white">
                        {match.home_score}
                      </div>
                    )}
                    <div>:</div>
                    {match.away_score !== "2" ? (
                      <div className="text-slate-500 dark:text-gray-500">
                        {match.away_score}
                      </div>
                    ) : (
                      <div className="text-slate-900 dark:text-white">
                        {match.away_score}
                      </div>
                    )}
                  </>
                ) : (
                  <>VS</>
                )}
              </div>
              <Image
                src={match.away_logo || "/teams/TBD.png"}
                alt={"away_logo"}
                width={32}
                height={32}
              />
              <div className="flex w-48 justify-start">{match.away}</div>
            </div>
            {/* !lg view */}
            <div className="flex items-center justify-between gap-3 dark:text-gray-200 lg:hidden">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src={match.home_logo || "/teams/TBD.png"}
                    alt={"home_logo"}
                    width={32}
                    height={32}
                  />
                  <div className="mx-3">{match.home}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src={match.away_logo || "/teams/TBD.png"}
                    alt={"away_logo"}
                    width={32}
                    height={32}
                  />
                  <div className="mx-3">{match.away}</div>
                </div>
              </div>
              <div className="flex w-16 flex-col justify-center gap-2 text-xl font-bold text-slate-300">
                {match.home_score && (
                  <>
                    {match.home_score !== "2" ? (
                      <div className="text-slate-500 dark:text-gray-500">
                        {match.home_score}
                      </div>
                    ) : (
                      <div className="text-slate-900 dark:text-white">
                        {match.home_score}
                      </div>
                    )}
                    {match.away_score !== "2" ? (
                      <div className="text-slate-500 dark:text-gray-500">
                        {match.away_score}
                      </div>
                    ) : (
                      <div className="text-slate-900 dark:text-white">
                        {match.away_score}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="hidden text-slate-500 lg:block">
              {match.stadium}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchCard;
