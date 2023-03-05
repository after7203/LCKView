import Player from "@/components/Player/Player";
import TeamFilter from "@/components/TeamFilter/TeamFilter";
import data from "public/data.json";
import { useState } from "react";

const Roster = () => {
  const [teamIdx, setTeamIdx] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <TeamFilter teamIdx={teamIdx} setTeamIdx={setTeamIdx} />
      <div className="mx-10 grid grid-cols-1 gap-4 rounded-md bg-slate-300 p-4 dark:bg-slate-600 sm:grid-cols-2 xl:grid-cols-5">
        <Player line={"top"} info={data.teams[teamIdx].roster.top} />
        <Player line={"jungle"} info={data.teams[teamIdx].roster.jungle} />
        <Player line={"mid"} info={data.teams[teamIdx].roster.mid} />
        <Player line={"adc"} info={data.teams[teamIdx].roster.adc} />
        <Player line={"sup"} info={data.teams[teamIdx].roster.sup} />
      </div>
    </div>
  );
};

export default Roster;
