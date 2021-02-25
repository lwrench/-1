import React from 'react';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import './style.scss';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <List></List>
      </div>
      <div className="home-right">
        <Recommend></Recommend>
        <Writer></Writer>
      </div>
    </div>
  );
}

export default Home;
