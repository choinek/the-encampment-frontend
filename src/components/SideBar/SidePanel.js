import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SidePanel({ isPaused, setPause }) {
  return (
    <Panel>
      <button type="submit" onClick={() => setPause(!isPaused)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <p>Players:</p>
      <br />
      <p>Player 1</p>
      <br />
      <p>Player 2</p>
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
};
