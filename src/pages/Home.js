import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
} from '@mui/material';

function TrigonometryCalculator() {
  const [angle, setAngle] = useState('');
  const [functionType, setFunctionType] = useState('sin');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const angleInRadians = (Number(angle) * Math.PI) / 180;
    let calcResult;

    switch (functionType) {
      case 'sin':
        calcResult = Math.sin(angleInRadians);
        break;
      case 'cos':
        calcResult = Math.cos(angleInRadians);
        break;
      case 'tan':
        calcResult = Math.tan(angleInRadians);
        break;
      case 'cot':
        calcResult = 1 / Math.tan(angleInRadians);
        break;
      case 'sec':
        calcResult = 1 / Math.cos(angleInRadians);
        break;
      case 'csc':
        calcResult = 1 / Math.sin(angleInRadians);
        break;
      default:
        calcResult = null;
    }

    setResult(calcResult);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        backgroundColor: '#ffff',
         boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          borderRadius: "1.5%",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Trigonometry Calculator
      </Typography>

      <TextField
        label="Angle (in degrees)"
        variant="outlined"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        type="number"
        sx={{ marginBottom: 2, width: '300px' }}
      />

      <FormControl sx={{ marginBottom: 2, width: '300px' }}>
        <InputLabel id="function-select-label">Function</InputLabel>
        <Select
          labelId="function-select-label"
          value={functionType}
          onChange={(e) => setFunctionType(e.target.value)}
        >
          <MenuItem value="sin">Sine (sin)</MenuItem>
          <MenuItem value="cos">Cosine (cos)</MenuItem>
          <MenuItem value="tan">Tangent (tan)</MenuItem>
          <MenuItem value="cot">Cotangent (cot)</MenuItem>
          <MenuItem value="sec">Secant (sec)</MenuItem>
          <MenuItem value="csc">Cosecant (csc)</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={calculate}
        sx={{ marginBottom: 2 }}
      >
        Calculate
      </Button>

      {result !== null && (
        <Typography variant="h6">
          Result: {result.toFixed(4)}
        </Typography>
      )}
    </Box>
  );
}

export default TrigonometryCalculator;
