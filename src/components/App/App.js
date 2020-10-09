import React, { useState, useEffect } from 'react';
import MainPlayerView from '../MainPlayerView';
import classes from './App.module.css';
import TopNavBar from '../TopNavBar';
import SideBar from '../SideBar';

export default function App() {
  const [isPaused, setPause] = useState(false);
  const [ws, setWs] = useState(null);
  const [message, updateMessage] = useState('');

  useEffect(() => {
    const wsClient = new WebSocket('wss://encampment.wroclaw.pl/');
    wsClient.onopen = () => {
      console.warn('ws opened');
      setWs(wsClient);
      wsClient.send(
        JSON.stringify({ l: 'Paulinow', m: 'Siemanko', r: 'room' }),
      );
    };
    wsClient.onclose = () => console.warn('ws closed');

    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (e) => {
      if (isPaused) return;
      const currentMessage = JSON.parse(e.data);

      if (currentMessage !== message) {
        updateMessage(currentMessage);
      }
    };
  }, [isPaused, ws]);
  return (
    <div className={classes.container}>
      <TopNavBar time={message.s} />
      <SideBar isPaused={isPaused} players={message.p} setPause={setPause} />
      <MainPlayerView />
    </div>
  );
}
