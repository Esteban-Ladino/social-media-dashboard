import React, { useState } from 'react';
import Header from '../components/header';
import CardList from '../components/CardList';
import OverviewCardList from '../components/overviewCardList';
import '../assets/styles/App.css';

function App(props) {
  const {
    info,
    data,
    overview
  } = props;

  const [light, setLight] = useState(true);

  const body = document.querySelector('body');
  (light)? body.setAttribute('class', 'bg-lwhite')
         : body.setAttribute('class', 'bg-veryDarkBlue');

  return (
    <div className={`app container-lg mt-5 mx-4 mx-lg-auto p-0`}>
      <Header totalFollowers={info.totalFollowers} light={light} setLight={setLight}/>
      <CardList cards={data} light={light}/>
      <OverviewCardList overviewCards={overview} light={light}/>
    </div>
  );
}

export default App;