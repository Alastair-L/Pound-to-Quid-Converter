import React from 'react';
import { Converter } from './Converter';
import { HistoricalChart } from './HistoricalChart';
import { AppStyleProviders } from './AppStyleProviders';

const RootScreen = () => (
  <div style={{background:"black", color: 'white'}} width="100%" height="100%">
    <Converter />
    <HistoricalChart />
  </div>
)


const App = () => {
  console.log('loading...');
  return (
    <AppStyleProviders>{RootScreen ? <RootScreen /> : null}</AppStyleProviders>
  );
};

export default App;
