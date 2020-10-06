import React from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default function MainCardsPopup({ isOpen, close }) {
  return (
    <Modal isOpen={isOpen} toggle={close} unmountOnClose size="lg">
      <ModalHeader toggle={close}>Active Card</ModalHeader>
      <ModalBody>
        <Cards className="card-back">
          <p>Active Cards</p>
        </Cards>
      </ModalBody>
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

MainCardsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
