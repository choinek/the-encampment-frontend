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
background: #2b1d0e; 
width: 15%;
height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
`;
