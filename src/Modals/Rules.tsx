import { Button, Modal, Accordion } from 'flowbite-react';
import { useState } from 'react';

export default function Rules() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setOpenModal(true)}
        className="bg-secondary w-[70%] m-[20px] no-shadow box-shadow max-w-[180px]"
        >
        <p className="text-lg">How to play</p>
        </Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className="">
        <Modal.Header className="no-shadow max-h-[60px]">Getting Started</Modal.Header>
        <Modal.Body className="max-h-[80%]">
            <Accordion className="max-h-[80%]">
                <Accordion.Panel>
                    <Accordion.Title>Setup</Accordion.Title>
                    <Accordion.Content className="p-2">
                    <p className="mb-2 no-shadow max-h-[300px] overflow-auto sm:overflow-hidden">
                    To set up a game of Oh Hell, players sit around a stable gameplay area. Before gameplay can begin, each player draws a card from a shuffled deck. The player with the highest card becomes the first dealer. Ties are broken by a redraw. The dealer then shuffles the decks and passes out cards to each player. For a game of three to five players, the dealer passes out 10 cards. For six players, the dealer passes out 8 cards. For seven players, the dealer passes out 7 cards. The remaining deck becomes the stock. The top card of the stock is flipped over and placed on top of the stock. The suit of the card is the trump suit for the round. 
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How To Play</Accordion.Title>
                    <Accordion.Content className="p-2">
                    <p className="mb-2 no-shadow">
                    Beginning with the player left of the dealer and going clockwise, players make a bid as to how many tricks they believe they can take. Player cannot pass but can bid zero, believing they will not make any tricks. The dealer must not bid the maximum number of bids possible. The player left of the dealer leads the first trick and play moves clockwise. Players must follow the lead suit if possible. The highest card wins the trick.                    
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel className="mb-5">
                    <Accordion.Title>Scoring</Accordion.Title>
                    <Accordion.Content className="p-2">
                    <p className="mb-2 no-shadow">
                    If a player makes the exact number of tricks they bid, they receive 10 points plus the number of tricks bid. If a player makes under or over the number of tricks they bid, they receive 0 points.                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </Modal.Body>
        {/* <Modal.Footer className="no-shadow">
            Credit to &nbsp;
            <a
                target="_blank" 
                href="https://playingcarddecks.com/blogs/how-to-play/oh-hell-game-rules"
                className="link">
                playingcarddecks.com
            </a>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}