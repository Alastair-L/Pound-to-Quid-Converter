import React from 'react';
import { Converter } from './Converter';
import { HistoricalChart } from './HistoricalChart';
import Footer from './Footer';
import { AppStyleProviders } from './AppStyleProviders';

const RootScreen = () => (
  <div  width="100%" height="100%">
    <Converter />
    <HistoricalChart />
    <Footer />
  </div>
)


const App = () => {
  console.log('loading...');
  return (
    <AppStyleProviders>{RootScreen ? <RootScreen /> : null}</AppStyleProviders>
  );
};

export default App;
