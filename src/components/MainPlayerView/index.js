import React from 'react';
import classes from './MainPlayerView.module.css';
import styled from "styled-components";
import { Col } from 'reactstrap';

export default function MainPlayerView() {
  return (
    <View className={classes.playerView}>
        <Col sm="12">
            <ActiveCardsView></ActiveCardsView>
        </Col>
        <Col sm="12">
            <MainCardsView></MainCardsView>
        </Col>
    </View>
  );
};

const View = styled.div`
width: 80%;
height: 400px;
background-color: white;
`;

const MainCardsView = styled.div`
width: 100%;
height: 250px;
background-color: lightgray;
`;
const ActiveCardsView = styled.div`
width: 100%;
height: 150px;
background-color: gray;
`;