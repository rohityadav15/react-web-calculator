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
    const a=(n * t);
    const b = r/100;
    const d=b/n;
    const e=(1 + d);
    const c=Math.pow((e/a),a);
    const s = p*c;
    setTime(t)
    setInterest(r)
    setNumber(n)
    setPrinciple(p)
    setResult(s);
    console.log("+====>",a,b,d,c,e,s)
  };
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "yellow",
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
            backgroundColor: "pink",
          }}
        >
            <TextField
            style={{ margin: 5 }}
            type="Numer"
            size="small"
            onChange={handlePrinciple}
          />
          <TextField
            style={{ margin: 5 }}
            type="Numer"
            size="small"
            onChange={handleInterest}
          />
          <TextField
            style={{ margin: 5 }}
            type="Numer"
            size="small"
            onChange={handleNumber}
          />
          <TextField
            style={{ margin: 5 }}
            type="Numer"
            size="small"
            onChange={handleTime}
          />
        </Box>
      </Box>
      <Button onClick={handleSubmit}>Submit</Button>
    {result}
    </Box>
  );
};
export default CompoundInterest;
