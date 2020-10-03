import React from 'react';
import styled from "styled-components";
import MainCards from './MainCards';

export default function SideBar() {
  return (
    <View>
        <DiscardedCards className="col-sm-3 card-back-horizontal"><p>Discarded cards</p></DiscardedCards>
        <MainCards />
        <div>See next player cards</div>
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
width: 200px;
height: 140px;
color: white;
position: relative;

p {
  position: absolute;
  top: 40%; left: 50%;
  transform: translate(-50%,-50%);
}
`;