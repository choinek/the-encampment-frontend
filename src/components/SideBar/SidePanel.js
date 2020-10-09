import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SidePanel({ isPaused, setPause, players }) {
  return (
    <Panel>
      <button type="submit" onClick={() => setPause(!isPaused)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      {players
        ? players.map((player) => {
            return <p>{player.name}</p>;
          })
        : null}
    </Panel>
  );
}

const Panel = styled.div`
  width: 150px;
  height: 300px;
  position: relative;
  background: black;
  color: white;
  p {
    position: relative;
    left: 20%;
  }
`;

SidePanel.propTypes = {
  setPause: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
};
