import React from 'react';
import styled from "styled-components";

export default function SampleCard() {
  return (
    <View>
<Img src={require('image.png')} />
<Description>Dużo ognisków</Description>
    </View>
  );
};

const View = styled.div`
width: 95%;
height: 250px;
background: black;
`;

const Img = styled.img`
height: 120px;
`;
const Description = styled.div`
height: 80px;
margin: 10px 10px;
background: white;
`;
