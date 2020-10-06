import React from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader } from 'reactstrap';

export default function MainCardsPopup() {
  return (
    <Modal>
      <ModalHeader>Active Card</ModalHeader>
      <Cards className="card-back">
        <p>Active Cards</p>
      </Cards>
    </Modal>
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
