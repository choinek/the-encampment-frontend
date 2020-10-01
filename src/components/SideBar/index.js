import React from 'react';
import styled from "styled-components";

export default function SideBar() {
  return (
    <View>
        <DiscardedCards className="col-sm-3"></DiscardedCards>
    </View>
  );
};

const View = styled.div`
width: 100%;
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

const DiscardedCards = styled.div`
background: gray; 
width: 150px;
height: 200px;
`;