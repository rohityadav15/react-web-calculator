import React, { useState } from 'react';

const NumberToWords = () => {
  const [number, setNumber] = useState('');
  const [words, setWords] = useState('');

  const numberToWords = (num) => {
    if (num === 0) return 'zero';

    const belowTwenty = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const thousands = ['', 'thousand', 'million', 'billion'];

    const convertToWords = (n) => {
      if (n < 20) return belowTwenty[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? '-' + belowTwenty[n % 10] : '');
      if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' and ' + convertToWords(n % 100) : '');
      for (let i = 0, unit = 1000; i < thousands.length; i++, unit *= 1000) {
        if (n < unit * 1000) {
          return convertToWords(Math.floor(n / unit)) + ' ' + thousands[i] + (n % unit !== 0 ? ' ' + convertToWords(n % unit) : '');
        }
      }
    };

    return convertToWords(num);
  };

  const handleConvert = () => {
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setWords('Please enter a valid number');
    } else {
      setWords(numberToWords(num));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Number to Words Converter</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <button
        onClick={handleConvert}
        style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Convert
      </button>
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        {words}
      </div>
    </div>
  );
};

export default NumberToWords;
