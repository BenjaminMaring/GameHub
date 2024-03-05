import { useNavigate } from "react-router-dom";
import Rules from "../Modals/Rules"
import NewGame from "../Modals/NewGame"

export default function ohHell() {
    const prevGame = localStorage.getItem('currentPlayers');
    const navigate = useNavigate();

    const continueGame = () => {
        navigate("/play")
    }


    return (
        <div className="flex flex-col align-center justify-center h-[100vh] overflow-hidden">
            <nav className="absolute top-0">
                
            </nav>
            <div className="flex flex-col items-center mb-[100px] w-[100vw]">
                <p className="text-accent text-7xl font-bold t-shadow">Oh Hell</p>
                <NewGame />
                { prevGame 
                ? <button className="bg-secondary p-2 mt-[20px] no-shadow box-shadow w-[180px] h-[50px] text-white rounded-md"
                    onClick={continueGame}
                >
                     <p className="text-xl">Continue</p>
                  </button> 
                : null}
                <Rules />
            </div>
            <footer className="fixed bottom-0 w-[100%] text-accent">
                <p className="w-[100%] text-center">Benjamin Maring 2024</p>
            </footer>
        </div>
    )
}


