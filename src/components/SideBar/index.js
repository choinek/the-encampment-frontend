import React from 'react';
import styled from "styled-components";
import MainCards from './MainCards';

export default function SideBar() {
  return (
    <View>
        <DiscardedCards className="col-sm-3"></DiscardedCards>
        <MainCards />
        <div></div>
    </View>
  );
};

const View = styled.div`
width: 100%;
display: flex;
flex-direction: row-reverse;
flex-wrap: nowrap;
justify-content: space-between;
align-content: flex-start;
align-items: center;
`;

const DiscardedCards = styled.div`
background: gray; 
width: 150px;
height: 200px;
`;