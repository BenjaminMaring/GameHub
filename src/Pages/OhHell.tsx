import React from 'react'
import Rules from "../Modals/Rules"
import NewGame from "../Modals/NewGame"
import '../CSS/ohHell.css'

export default function ohHell() {


    return (
        <div className="h-[100vh] bg-bgDark">
            <nav className="w-[100%] h-[70px]">

            </nav>
            <div className="h-[calc(100%-70px)] flex items-center justify-center border">
                <div className="flex flex-col items-center">
                    <p className="text-accent text-7xl font-bold shadow">Oh Hell</p>
                    <NewGame />
                    <Rules />
                </div>
                <footer className="absolute bottom-0 text-accent font mb-[10px]">
                    <p className="w-[100vw]text-center">Benjamin Maring 2024</p>
                </footer>
            </div>
        </div>
    )
}