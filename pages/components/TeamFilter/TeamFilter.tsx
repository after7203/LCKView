import data from 'public/data.json'
import Image from 'next/image';

const TeamFilter = () => {
    return (
        <div className='flex space-x-10 p-5'>
            <div className='flex items-center'>
                <Image width={46} height={46} src={`/filter.png`} alt={`전체`}></Image>
                <span className='whitespace-nowrap'>전체</span>
            </div>
            {data.teams.map((team, idx) => (
                <div className='flex items-center space-x-2' key={idx}>
                    <Image width={46} height={46} src={`/teams/${team['eng-name'].toLowerCase()}_tp.png`} alt={`${team['kr-name']} 로고`}></Image>
                    <span className='whitespace-nowrap'>{team['eng-name']}</span>
                </div>
            ))}
        </div>
    );
}

export default TeamFilter;