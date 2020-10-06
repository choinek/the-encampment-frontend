import React from 'react';
import MainPlayerView from '../MainPlayerView';
import classes from './App.module.css';
import TopNavBar from '../TopNavBar';
import SideBar from '../SideBar';

const App = () => (
  <div className={classes.container}>
    <TopNavBar />
    <SideBar />
    <MainPlayerView />
  </div>
);

export default App;
