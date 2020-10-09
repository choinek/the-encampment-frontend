import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Menu({ time }) {
  return (
    <View>
      <h3>Day 1, {time === 1 ? 'Day' : 'Night'}</h3>
      <Stats>
        <p>Hunger: 100%</p>
        <p>Temperature: 20oC</p>
        <p>Security: 100%</p>
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

Menu.propTypes = {
  time: PropTypes.number.isRequired,
};
