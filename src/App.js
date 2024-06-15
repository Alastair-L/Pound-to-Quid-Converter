import React from 'react';
import { Converter } from './Components/Converter';
import { HistoricalChart } from './Components/HistoricalChart';
import Footer from './Components/Footer';
import ExchangeRate from './Components/ExchangeRate';
import { AppStyleProviders } from './AppStyleProviders';

const RootScreen = () => (
  <div  width="100%" height="100%">
    <Converter />
    <HistoricalChart />
    <ExchangeRate />
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
