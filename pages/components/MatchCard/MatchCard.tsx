import { MatchCardType } from "@/pages";

const MatchCard = ({ matches }: { matches: MatchCardType }) => {
    console.log(matches)
    return (
        <div>
            <hr />
            <div className="p-4">{matches.date}</div>
            {matches && matches.day_matches.map((match) => (
                <>
                    <hr />
                    <div className="p-4">{match.time}</div>
                </>
            ))}
        </div>
    );
}

export default MatchCard;