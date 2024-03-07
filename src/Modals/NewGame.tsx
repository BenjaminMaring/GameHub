import { Button, Modal } from 'flowbite-react';
import { useState, useEffect, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Player {
    name: String,
    totals: number[],
    bets: number[],
    wins: number[]
}

export default function NewGame() {
  const [openModal, setOpenModal] = useState(false);
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayer, setNewPlayer] = useState("");
  const navigate = useNavigate();

  const handleModal = () => {
    if (openModal) {
      setPlayers([]);
      setNewPlayer("");
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }

  const updateNewPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlayer(e.target.value);
  }

  const addUser = () => {
    setPlayers(prev => [...prev, {name: newPlayer, totals: [0], bets: [0], wins: [0]}]);
    setNewPlayer("")
  }

  const removeUser = (index: number) => {
    const newArray = [...players];
    newArray.splice(index, 1);
    setPlayers(newArray);
  }

  const addUserOnEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addUser();
      setNewPlayer("");
    }
  }

  const goToGame = () => {
    saveNewGame();
    navigate("/play")
  }

  const saveNewGame = () => {
    localStorage.setItem('currentPlayers', JSON.stringify(players));
    localStorage.setItem('currentRound', JSON.stringify(1));
  }

  const playerElems = players.map((player, index) => {
    return (
        <div key={index} className="text-xl sm:text-2xl m-2 flex items-center">
            {player.name}
            <button 
              onClick={() => removeUser(index)}>
              <svg className="m-1 text-secondary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-3 7c0-1.113.903-2 2.009-2h6.248A5.477 5.477 0 0 0 9 14.5c0 1.303.453 2.5 1.21 3.443c-.395.038-.8.057-1.21.057c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13m17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z"/></svg>
            </button>
        </div>
    )
  })

  return (
    <>
      <Button 
        onClick={handleModal}
        className="bg-secondary w-[85%] mt-[20px] no-shadow box-shadow max-w-[200px]"
        >
        <p className="text-xl">New Game</p>
        </Button>
      
      <Modal show={openModal} onClose={handleModal} >
        <Modal.Header>
          <p>Player Count <span className="text-accent">{players.length}</span></p>
          
        </Modal.Header>
        <Modal.Body>
            <div className="flex flex-wrap items-center">
                <div className="w-[100%] h-[50px] sm:w-[50%] flex justify-center">
                    <input
                        placeholder="New Player"
                        className="border text-3xl w-[250px] ps-1"
                        value={newPlayer}
                        onChange={updateNewPlayer}
                        onKeyDown={addUserOnEnterKey}>
                    </input>
                </div>
                <div className="w-[100%] h-[50px] sm:w-[50%] flex justify-evenly mt-3 mb-3">
                  <button 
                    className="text-xl w-[100px] border text-3xl bg-secondary text-white btn-border"
                    onClick={addUser}
                    >Add</button>
                  <button
                    className="text-xl w-[100px] bg-accent text-white text-3xl btn-border"
                    onClick={goToGame}
                    >Start</button>
                </div> 
                <div className="border-t w-[100%] p-3 flex flex-wrap max-h-[300px]">
                  {playerElems}
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
