import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function NewGame() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setOpenModal(true)}
        className="bg-secondary w-[85%] mt-[20px] no-shadow box-shadow"
        >
        <p className="text-xl">New Game</p>
        </Button>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          test
        </Modal.Body>
      </Modal>
    </>
  );
}
