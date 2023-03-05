import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";
import { Data } from "./api/rank";

const Rank = () => {
  const { data, isLoading } = useSWR<Data>("/api/rank", async () => {
    return fetch("/api/rank").then((res) => res.json());
  });
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <>
      <div className="m-auto flex w-full max-w-[1200px] auto-rows-auto flex-col p-7">
        <div className="flex border-t border-b bg-slate-50 p-5 text-slate-600 dark:border-slate-500 dark:bg-slate-500 dark:text-gray-200">
          <div className="flex w-1/3 items-center">팀 순위</div>
          <div className="grid w-2/3 grid-cols-4 gap-y-3 lg:grid-cols-8">
            {[
              "승",
              "패",
              "득실차",
              "승률",
              "KDA",
              "킬",
              "데스",
              "어시스트",
            ].map((el, idx) => (
              <div key={idx} className="flex flex-1 justify-center">
                {el}
              </div>
            ))}
          </div>
        </div>
        <div>
          {Array(10)
            .fill("dummy")
            .map((el, idx) => (
              <div
                key={idx}
                className="flex items-center border-b p-4 dark:text-gray-200"
              >
                <div className="mr-4 w-9 text-3xl font-bold italic">
                  {idx + 1}
                </div>
                {data ? (
                  <>
                    <Image
                      src={`/teams/${data.team[idx]}.png`}
                      alt={"팀 로고"}
                      width={40}
                      height={40}
                      className=""
                    ></Image>
                    <div className="invisible ml-5 flex-1 lg:visible">
                      {data.team[idx]}
                    </div>
                    <div className="flex w-2/3 items-center space-x-5">
                      <div className="min:h-10 grid w-full grid-cols-4 items-center gap-y-3 lg:grid-cols-8">
                        {data.indicator[idx].map((el, idx) => (
                          <div key={idx} className="flex flex-1 justify-center">
                            {el}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex w-full justify-between">
                    <div className="flex space-x-2">
                      <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
                      <div className="hidden h-10 w-32 animate-pulse rounded-full bg-slate-200 lg:flex" />
                    </div>
                    <div className="h-10 w-2/3 animate-pulse rounded-full bg-slate-200" />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rank;
