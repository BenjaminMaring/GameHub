import Rules from "../Modals/Rules"
import NewGame from "../Modals/NewGame"
import '../CSS/ohHell.css'

export default function ohHell() {


    return (
        <div className="flex flex-col align-center justify-center h-[100vh] overflow-hidden">
            <nav className="absolute top-0">
                
            </nav>
            <div className="flex flex-col items-center mb-[100px] w-[100vw]">
                <p className="text-accent text-7xl font-bold t-shadow">Oh Hell</p>
                <NewGame />
                <Rules />
            </div>
            <footer className="fixed bottom-0 w-[100%] text-accent">
                <p className="w-[100%] text-center">Benjamin Maring 2024</p>
            </footer>
        </div>
    )
}


