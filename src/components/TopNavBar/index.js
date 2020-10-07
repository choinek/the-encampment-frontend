import React from 'react';
import styled from 'styled-components';
import classes from './TopNavBar.module.css';
import Menu from './menu';
import PlayerMenu from './PlayerMenu';

export default function TopNavBar() {
  return (
    <View className={classes.playerView}>
      <Menu />
      <PlayerMenu />
    </View>
  );
}

const View = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
