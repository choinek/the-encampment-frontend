import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainCards from './MainCards';
import SidePanel from './SidePanel';
import DiscardedCards from './DiscardedCards';

export default function SideBar({ isPaused, setPause, players }) {
  return (
    <View>
      <DiscardedCards />
      <MainCards />
      <SidePanel isPaused={isPaused} setPause={setPause} players={players} />
    </View>
  );
}

const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
`;

SideBar.propTypes = {
  setPause: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
};
