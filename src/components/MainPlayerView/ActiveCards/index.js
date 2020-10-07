import React, { useState } from 'react';
import styled from 'styled-components';
import ActiveCardsPopup from './popup';

export default function MainPlayerView() {
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => setIsOpen(false);
  return (
    <>
      <ActiveCardsView>
        <ActiveCard className="card-back" onClick={() => setIsOpen(true)} />
        <ActiveCard className="card-back" onClick={() => setIsOpen(true)} />
        <ActiveCard className="card-back" onClick={() => setIsOpen(true)} />
        <ActiveCard className="card-back" onClick={() => setIsOpen(true)} />
      </ActiveCardsView>
      {isOpen ? <ActiveCardsPopup close={closePopup} isOpen={isOpen} /> : null}
    </>
  );
}

const ActiveCardsView = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
`;

const ActiveCard = styled.div`
  width: 150px;
  height: 200px;
`;
