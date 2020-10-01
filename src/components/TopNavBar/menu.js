import React from 'react';
import styled from "styled-components";

export default function Menu() {
  return (
    <View>
<h3>Day 1, Night</h3>
    </View>
  );
};

const View = styled.div`
background: gray; 
width: 15%;
height: 100%;
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
