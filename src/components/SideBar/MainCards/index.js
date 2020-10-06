import React, { useState } from 'react';
import styled from 'styled-components';
import MainCardsPopup from './popup';

export default function MainCards() {
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <Cards className="card-back" onClick={() => setIsOpen(true)}>
        <p>Active Cards</p>
      </Cards>
      {isOpen ? <MainCardsPopup close={closePopup} isOpen={isOpen} /> : null}
    </>
  );
}

const Cards = styled.div`
  width: 140px;
  height: 200px;
  margin-right: 60%;
  display: flex;
  justify-content: center;
  position: relative;
  color: white;
  p {
    position: absolute;
    top: 40%;
    left: 55%;
    transform: translate(-50%, -50%);
  }
`;
