import { useState, useEffect } from "react"

interface Player {
    name: String,
    totals: number[],
    bets: number[],
    wins: number[]
}

interface propTypes {
    index: number,
    player: Player,
    round: number,
    updateData: Function
}

export default function Players(props: propTypes) {
    const [bet, setBet] = useState<string>(JSON.stringify(props.player.bets[props.round-1]))
    const [win, setWin] = useState<string>(JSON.stringify(props.player.wins[props.round-1]))

    useEffect(() => {
        setBet(JSON.stringify(props.player.bets[props.round-1]));
        setWin(JSON.stringify(props.player.wins[props.round-1]));
    }, [props])

    useEffect(() => {
        props.updateData(props.index, parseInt(bet), parseInt(win));
    }, [bet, win])

    function handleBet(e: React.ChangeEvent<HTMLInputElement>) {
        setBet(e.target.value);
        
    }

    function handleWin(e: React.ChangeEvent<HTMLInputElement>) {
        setWin(e.target.value);
    }
    
    return (
        // <div className="flex justify-center border p-[10px] rounded">
        //     <div className="bg-secondary h-[120px] w-[80%] rounded">
        //         <div className="bg-lightBlue h-[50%] rounded-t">
        //             <div className="text-3xl sm:text-5xl ms-[20px] me-[5px] flex items-center text-white justify-between">
        //                 <p>{props.player.name}</p>
        //                 <p>Total: {props.player.totals[props.round-1]}</p>
        //             </div>
        //         </div>
        //         <div className="text-3xl sm:text-5xl h-[50%] ms-[20px] me-[5px] flex items-center text-white justify-between">
        //             <div className="flex items-center">
        //                 <p>Bet</p>
        //                 <input className="w-[60px] m-[10px] h-[50px] text-black" 
        //                     type="number" 
        //                     value={bet} 
        //                     placeholder="Bet"
        //                     onChange={handleBet}>
        //                 </input>
        //             </div>
        //             <div className="flex items-center">
        //                 <p>Won</p>
        //                 <input className="w-[60px] m-[10px] h-[50px] text-black" 
        //                     type="number" 
        //                     value={win} 
        //                     placeholder="Wins"
        //                     onChange={handleWin}>
        //                 </input>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="h-[150px] w-[300px] m-4 box-shadow bg-secondary rounded">
            <div className="h-[70px] bg-lightBlue flex justify-between items-center ps-4 pe-4 text-white text-4xl sm:text-5xl rounded-t">
                <p>{props.player.name}</p>
                <p>{props.player.totals[props.round-1]}</p>
            </div>
            <div className="h-[80px] flex justify-evenly">
                <div className="flex items-center text-white text-2xl">
                    <p>Bet</p>
                    <input className="w-[60px] p-1 m-[10px] h-[50px] text-black" 
                        type="number" 
                        value={bet} 
                        placeholder="Bet"
                        onChange={handleBet}>
                    </input>
                </div>
                <div className="flex items-center text-white text-2xl">
                    <p>Won</p>
                    <input className="w-[60px] p-1 m-[10px] h-[50px] text-black" 
                        type="number" 
                        value={win} 
                        placeholder="Won"
                        onChange={handleWin}>
                    </input>
                </div>
            </div>
        </div>
    );
}