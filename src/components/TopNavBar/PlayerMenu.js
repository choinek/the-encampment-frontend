import React from 'react';
import styled from 'styled-components';

export default function PlayerMenu() {
  return (
    <View>
      <Stats>
        <p> Stamina: 100%</p>
        <p>Health: 100%</p>
      </Stats>
    </View>
  );
}

const View = styled.div`
  background: black;
  color: white;
  width: 15%;
  height: 100%;
`;

const Stats = styled.div`
  background: gray;
  color: white;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
`;
