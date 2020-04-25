import React, { useState } from 'react';
import Header from '../components/header';
import CardList from '../components/CardList';
import OverviewCardList from '../components/overviewCardList';
import Data from '../assets/data.json'
import '../assets/styles/App.css';

function App() {
  const [light, setLight] = useState(true);

  const body = document.querySelector('body');
  (light)? body.setAttribute('class', 'bg-lwhite')
         : body.setAttribute('class', 'bg-veryDarkBlue');

  return (
    <div className={`app container-lg mt-5 mx-4 mx-lg-auto p-0`}>
      <Header totalFollowers={Data.info.totalFollowers} light={light} setLight={setLight}/>
      <CardList cards={Data.data} light={light}/>
      <OverviewCardList overviewCards={Data.overview} light={light}/>
    </div>
  );
}

export default App;