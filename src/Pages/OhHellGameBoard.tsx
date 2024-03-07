import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Players from "../Components/Players"
import LeaderBoard from "../Modals/LeaderBoard"

interface Player {
    name: String,
    totals: number[],
    bets: number[],
    wins: number[]
}

export default function OhHellGameBoard() {
    const [playerData, setPlayerData] = useState<Player[]>([])
    const [round, setRound] = useState<number>(0)

    useEffect(() => {
        const currentPlayers = localStorage.getItem('currentPlayers');
        let currentRound = localStorage.getItem('currentRound');
        
        if (currentPlayers && currentRound) {
            setPlayerData(JSON.parse(currentPlayers));
            setRound(JSON.parse(currentRound));
        }
    }, [round])

    const updateData = (index: number, bets: number, wins: number) => {
        setPlayerData(prev => {
            const newData = prev;
            newData[index].bets[round-1] = bets;
            newData[index].wins[round-1] = wins;
            return newData
        })
    }

    const prevRound = () => {
        localStorage.setItem('currentRound', JSON.stringify(round-1));
        setRound(prev => {
            return (prev -1);
        });
    }

    const nextRound = () => {
        setRound(prev => {
            return prev + 1;
        });
        const players: Player[] = playerData.map((user: Player) => {
            const newTotal = user.totals[round-1] + (user.bets[round-1] === user.wins[round-1] ?  user.bets[round-1] + 10 : Math.abs(user.bets[round-1] - user.wins[round-1])*-1)

            if (user.totals.length > round) {
                const totals: number[] = [...user.totals];
                totals[round] = newTotal;
                return {
                    name: user.name,
                    totals: [...totals],
                    bets: [...user.bets],
                    wins: [...user.wins]
                }
            }
            else {
                return {
                    name: user.name,
                    totals: [...user.totals, newTotal],
                    bets: [...user.bets, 0],
                    wins: [...user.wins, 0]
                }
            }
        })

        localStorage.setItem('currentPlayers', JSON.stringify(players));
        localStorage.setItem('currentRound', JSON.stringify(round+1));

        setPlayerData(players);

    }

    const playerElems = playerData.map((player, index) => {
        return (
            <Players key={index} index={index} player={player} round={round} updateData={updateData}/>
        )
      })

    return (
        <div className="w-[100vw]">
            <nav className="fixed top-0 h-[70px] w-[100%] flex justify-between items-center">
                <Link className="text-7xl text-accent" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20zm7-7.77"/></svg>
                </Link>
                <p className="text-5xl text-white">R<span className="text-accent">{round ? round : null}</span></p>
                <p className="text-5xl text-white">C<span className="text-accent">{(round <= 10 ? 11 - round : round - 9)}</span></p>
                <LeaderBoard playerData={playerData} round={round}/>
            </nav>
            <div className="overflow-auto">
                <div className="flex justify-evenly align-center mt-[80px] p-3">
                    <button 
                        className="rounded bg-lightBlue open-font text-bgDark p-3 text-4xl font-medium disabled:bg-grey" 
                        onClick={prevRound}
                        disabled={round <= 1}
                        >Prev</button>
                    <button 
                        className="rounded bg-lightBlue open-font text-bgDark p-3 text-4xl font-medium"
                        onClick={nextRound}
                        >Next</button>
                </div>
                <div>
                    <div className="absolute t-[-10px] w-[100%] h-[20px] gradient"></div>
                    <div className="max-h-[490px] ms-[20px]  me-[20px] flex flex-wrap justify-center overflow-auto">
                        {playerElems}
                    </div>
                </div>
            </div>
        </div>
    )
}