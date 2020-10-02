import React from 'react';
import classes from './MainPlayerView.module.css';
import styled from "styled-components";
import { Col } from 'reactstrap';
import SampleCard from './SampleCard';

export default function MainPlayerView() {
  return (
    <View className={classes.playerView}>
        <Col sm="12">
            <ActiveCardsView>
                <ActiveCard></ActiveCard>
                <ActiveCard></ActiveCard>
                <ActiveCard></ActiveCard>
                <ActiveCard></ActiveCard>
            </ActiveCardsView>
        </Col>
        <Col sm="12">
            <MainCardsView>
                <CardSlot><SampleCard /></CardSlot>
                <CardSlot><SampleCard /></CardSlot>
                <CardSlot></CardSlot>
                <CardSlot></CardSlot>
                <CardSlot><SampleCard /></CardSlot>
                <CardSlot></CardSlot>
            </MainCardsView>
        </Col>
    </View>
  );
};

const View = styled.div`
width: 60%;
height: 250px;
`;

const MainCardsView = styled.div`
width: 100%;
height: 100px;
background-color: lightgray;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-flex-direction: row-reverse;
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
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
width: 100%;
height: 110px;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-flex-direction: row-reverse;
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
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

const CardSlot = styled.div`
width: 17%;
height: 235px;
background-color: white;
border: 2px solid black;
`;

const ActiveCard = styled.div`
width: 17%;
height: 150px;
background-color: lightgray;
border: 2px solid black;
`;