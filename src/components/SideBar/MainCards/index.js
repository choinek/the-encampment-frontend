import React from 'react';
import styled from 'styled-components';

export default function MainCards() {
  return (
    <Cards className="card-back">
      <p>Active Cards</p>
    </Cards>
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
