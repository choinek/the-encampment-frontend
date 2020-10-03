import React from 'react';
import styled from "styled-components";

export default function MainCards() {
  return (
  <Cards className="card-back-horizontal">
    <p>Active Cards</p>
  </Cards>
  );
};

const Cards = styled.div`
width: 200px;
height: 140px;
margin-right: 60%;
display: flex;
justify-content: center;
position: relative;
color: white;
p {
  position: absolute;
  top: 40%; left: 55%;
  transform: translate(-50%,-50%);
}
`;
