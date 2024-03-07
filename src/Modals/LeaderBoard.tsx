import { useState } from 'react'
import { Modal } from "flowbite-react"
import { Link } from 'react-router-dom'

interface Player {
    name: String,
    totals: number[],
    bets: number[],
    wins: number[]
}

interface propTypes {
    playerData: Player[],
    round: number
}

export default function LeaderBoard(props: propTypes) {
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
       setOpenModal(prev => !prev);
      }

    const dataToSort = [...props.playerData];
    const filteredStandings = dataToSort.sort((a, b) => b.totals[props.round-1] - a.totals[props.round-1]);
    const filteredElems = filteredStandings.map((player, index) => (
        <div className="max-w-[100%] text-3xl flex justify-between m-3" key={index}>
            <p>{index+1}.  {player.name}</p>
            <p>{player.totals[props.round-1]}</p>
        </div>
    ))

return (
    <>
        <button className="text-7xl text-accent" onClick={handleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19h4.673v-8H4zm5.673 0h4.654V5H9.673zm5.654 0H20v-6h-4.673zM3 20V10h5.673V4h6.654v8H21v8z"/></svg>
        </button>
    
        <Modal show={openModal} onClose={handleModal} >
            <Modal.Header>
                <p className="text-3xl">Rankings</p>
            </Modal.Header>
            <Modal.Body className="">
                {filteredElems}
                <Link className="text-3xl text-lightBlue bg-bgDark rounded m-[20px]" to="/">
                    Home
                </Link>
            </Modal.Body>
        </Modal>
    
    </>
)

}