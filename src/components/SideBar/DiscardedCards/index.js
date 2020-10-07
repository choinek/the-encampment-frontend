import React, { useState } from 'react';
import styled from 'styled-components';
import DiscardedCardsPopup from './popup';

export default function DiscardedCards() {
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => setIsOpen(false);
  return (
    <>
      <DiscardedCard
        className="card-back-horizontal"
        onClick={() => setIsOpen(true)}
      >
        <p>Discarded cards</p>
      </DiscardedCard>
      {isOpen ? (
        <DiscardedCardsPopup close={closePopup} isOpen={isOpen} />
      ) : null}
    </>
  );
}

const DiscardedCard = styled.div`
  width: 200px;
  height: 140px;
  color: white;
  position: relative;

  p {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
