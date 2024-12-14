import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CompoundInterest = () => {
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);
  const [number, setNumber] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [result, setResult] = useState(0);

  const handlePrinciple = (e) => {
    setPrinciple(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleInterest = (e) => {
    setInterest(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    const t = time;
    const r = interest;
    const n = number;
    const p = principle;
    const a = n * t;
    const b = r / 100;
    const d = b / n;
    const e = 1 + d;
    const c = e ** a;
    const s = p * c;
    const ans = s.toFixed(2);
    setTime(t);
    setInterest(r);
    setNumber(n);
    setPrinciple(p);
    setResult(ans);
    console.log("+====>", a, b, d, c, e, s);
  };
  return (
    <Box
      style={{
        padding: "50px",
        borderRadius: 5,
        border: "1px solid blue",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <Typography style={{ marginTop: 15 }}>Principle(P)</Typography>

          <Typography style={{ marginTop: 25 }}>Interest(R)</Typography>
          <Typography style={{ marginTop: 15 }}>
            Number of interest <br /> in year (N)
            <br />
          </Typography>
          <Typography style={{ marginTop: 15 }}>Time in Year(T)</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{ margin: 5 }}
            type="Number"
            size="small"
            onChange={handlePrinciple}
          />
          <TextField
            style={{ margin: 5 }}
            type="Number"
            size="small"
            onChange={handleInterest}
          />
          <TextField
            style={{ margin: 5 }}
            type="Number"
            size="small"
            onChange={handleNumber}
          />
          <TextField
            style={{ margin: 5 }}
            type="Number"
            size="small"
            onChange={handleTime}
          />
        </Box>
      </Box>
      <Box><Typography>Total compound interest: {result}</Typography></Box>
      <Button onClick={handleSubmit}>Submit</Button>
      
    </Box>
  );
};
export default CompoundInterest;
