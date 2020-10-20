import React from 'react';
import { Input } from '@material-ui/core';

export const Converter = () => {
  const [amount, setAmount] = React.useState(0);

  return (
    <div style={{
      display: 'flex',
      direction: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      wrap: true,
      width: '800px',
    }}>
      <h1> Convert </h1>
      <Input color='primary' width={'500px'} onChange={(someInput) => console.log(someInput) || setAmount(someInput.target.value)} placeholder='how many quids?' type='text' height='500'  />
      <h1> Pound(s):  </h1>{' '}
      <h1> {amount ? `${amount} quids` : null} </h1>
    </div>
  );
};
