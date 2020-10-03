import React from 'react';
import classes from './TopNavBar.module.css';
import styled from "styled-components";
import Menu from './menu';

export default function TopNavBar() {
  return (
    <View className={classes.playerView}>
            <ActiveCardsView className="col-sm-3"></ActiveCardsView>
            <Menu />
    </View>
  );
};

const View = styled.div`
width: 100%;
height: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const ActiveCardsView = styled.div`
background: black; 
width: 10%;
height: 100%;
`;