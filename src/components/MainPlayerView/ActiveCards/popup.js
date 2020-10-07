import React from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default function ActiveCardsPopup({ isOpen, close }) {
  return (
    <Modal isOpen={isOpen} toggle={close} unmountOnClose>
      <ModalHeader toggle={close}>Active Card</ModalHeader>
      <ModalBody>
        <Cards className="card-back">
          <p>Active Attribute</p>
        </Cards>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </ModalBody>
    </Modal>
  );
}

const Cards = styled.div`
  width: 140px;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  left: 30%;
  color: white;
  margin-bottom: 15px;
  p {
    position: absolute;
    top: 40%;
    left: 55%;
    transform: translate(-50%, -50%);
  }
`;

ActiveCardsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
