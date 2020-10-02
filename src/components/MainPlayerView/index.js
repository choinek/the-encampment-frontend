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
                <CardSlot className="card-back"><SampleCard /></CardSlot>
                <CardSlot className="card-back"><SampleCard /></CardSlot>
                <CardSlot className="card-back"></CardSlot>
                <CardSlot className="card-back"></CardSlot>
                <CardSlot className="card-back"><SampleCard /></CardSlot>
                <CardSlot className="card-back"></CardSlot>
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
background-color: #654321;
display: flex;
flex-direction: row-reverse;
flex-wrap: nowrap;
justify-content: space-between;
align-content: flex-start;
align-items: center;
`;
const ActiveCardsView = styled.div`
width: 100%;
height: 110px;
display: flex;
flex-direction: row-reverse;
flex-wrap: nowrap;
justify-content: space-between;
align-content: flex-start;
align-items: center;
`;

const CardSlot = styled.div`
width: 17%;
height: 235px;
border: 2px solid black;
`;

const ActiveCard = styled.div`
width: 17%;
height: 150px;
background-color: #654321;
border: 2px solid black;
`;