import React from 'react';
import styled from "styled-components";

export default function SidePanel() {
  return (
  <Panel>
    <p>Players:</p>
    <br/>
    <p>Player 1</p>
    <br/>
    <p>Player 2</p>
  </Panel>
  );
};

const Panel = styled.div`
width: 150px;
height: 300px;
position: relative;
background: black;
color: white;
p {
    position: relative;
    left: 20%;
}
`;
