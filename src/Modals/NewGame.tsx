import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

interface Player {
    name: String,
    total: Number,
}

export default function NewGame() {
  const [openModal, setOpenModal] = useState(false);
  const [players, setPlayers] = useState<Player[]>([])
  const [newUser, setNewUser] = useState("")

  const updateNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(e.target.value);
  }

  const addUser = () => {
    setPlayers(prev => [...prev, {name: newUser, total: 0}]);
  }

  const userElems = players.map(() => {
    return (
        <div key={crypto.randomUUID()}>
            
        </div>
    )
  })


  return (
    <>
      <Button 
        onClick={() => setOpenModal(true)}
        className="bg-secondary w-[85%] mt-[20px] no-shadow box-shadow max-w-[200px]"
        >
        <p className="text-xl">New Game</p>
        </Button>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Header>New Game</Modal.Header>
        <Modal.Body>
            <div className="flex flex-wrap items-center">
                <div className="w-[100%] h-[50px] sm:w-auto flex justify-center">
                    <input
                        placeholder="New Player"
                        className="border text-3xl"
                        value={newUser}
                        onChange={updateNewUser}>
                    </input>
                </div>
                <div className="w-[100%] h-[50px] sm:w-auto flex justify-evenly m-5">
                  <button 
                    className="text-xl w-[100px] border text-3xl"
                    >Add</button>
                  <button
                    className="text-xl w-[100px] bg-accent text-white text-3xl"
                    >Start</button>
                </div> 
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
