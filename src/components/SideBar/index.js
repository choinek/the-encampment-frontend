import React from 'react';
import styled from 'styled-components';
import MainCards from './MainCards';
import SidePanel from './SidePanel';
import DiscardedCards from './DiscardedCards';

export default function SideBar() {
  return (
    <View>
      <DiscardedCards />
      <MainCards />
      <SidePanel />
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
