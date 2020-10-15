import React from 'react';

export const Converter = () => {
  const [amount, setAmount] = React.useState(0);

  return (
    <div style={{
      display: 'flex',
      direction: 'row',
      alignItems: 'baseline',
    }}>
      <h1> Covert </h1>
      <input id='5' type='text' height='500' />
      <h1> Pound(s): </h1>
      <button onClick={() => {
        const hi = document.getElementById('5').value;
        console.log(hi);
        setAmount(hi);
      }}>submit</button>
      <h1> {amount} </h1>
    </div>
  );
};
