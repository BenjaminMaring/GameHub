import { useState, useEffect } from "react"

interface Player {
    name: String,
    totals: number[],
    bets: number[],
    wins: number[]
}

export default function OhHellGameBoard() {
    const [playerData, setPlayerData] = useState<Player[]>([])
    const [round, setRound] = useState<number>(0)
    console.log(round)

    useEffect(() => {
        const currentPlayers = localStorage.getItem('currentPlayers');
        let currentRound = localStorage.getItem('currentRound');
        currentRound = currentRound.round 
        console.log(currentRound)
        if (currentPlayers && currentRound) {
            setPlayerData(JSON.parse(currentPlayers));
            setRound();
        }
    }, [])

    useEffect(() => {

    }, [round])

    const prevRound = () => {
        
        localStorage.setItem('currentRound', JSON.stringify(round-1));
        setRound(prev => {
            return (prev -1);
        });
    }

    const nextRound = () => {
        const players: Player[] = playerData.map((user: Player) => {

            const newTotal = user.totals[round-1] + (user.bets[round-1] === user.wins[round-1] ?  user.bets[round-1] + 10 : Math.abs(user.bets[round-1] - user.wins[round-1])*-1)
            
            if (user.totals.length > round) {
                const totals: number[] = [...user.totals];
                totals[round-1] = newTotal;
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
        setRound(prev => {
            return prev + 1;
        });

    }

    return (
        <div className="w-[100vw]">
            <nav className="fixed top-0 h-[70px] w-[100%] flex justify-between items-center">
                <button className="text-7xl text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20zm7-7.77"/></svg>
                </button>
                <p className="text-5xl text-white">R<span className="text-accent">1</span></p>
                <p className="text-5xl text-white">C<span className="text-accent">10</span></p>
                <button className="text-7xl text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19h4.673v-8H4zm5.673 0h4.654V5H9.673zm5.654 0H20v-6h-4.673zM3 20V10h5.673V4h6.654v8H21v8z"/></svg>                </button>
            </nav>
            <div className="overflow-auto">
                <div className="flex justify-evenly align-center mt-[80px] p-3">
                    { round == 1 
                    ? null
                    : <button className="rounded bg-lightBlue open-font text-bgDark p-3 text-4xl font-medium" onClick={prevRound}>Prev</button>
                }
                    <button className="rounded bg-lightBlue open-font text-bgDark p-3 text-4xl font-medium">Next</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}