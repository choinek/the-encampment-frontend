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
display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;

const ActiveCardsView = styled.div`
background: gray; 
width: 10%;
height: 100%;
`;