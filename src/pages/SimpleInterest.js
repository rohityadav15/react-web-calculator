import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SimpleInterest = () => {
  const [principale, setPrincipale] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [submit, setSubmit] = useState(0);

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handlePrincipale = (e) => {
    setPrincipale(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleSubmit = () => {
    const r = rate;
    const d = duration;
    const p = principale;
    const m = (p * d * r) / 100;
    setDuration(d);
    setRate(r);
    setPrincipale(p);
    setSubmit(m);
  };

  const handleClear = () => {
    setRate(0);
    setDuration("");
    setPrincipale("");
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          height: "50%",
          width: "50%",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 5,
            align: "left",
          }}
        >
          <Typography style={{ marginRight: 5 }}>Principale</Typography>
          <TextField
            label="Principale"
            id="outlined-size-small"
            size="small"
            type="Number"
            onChange={handlePrincipale}
            style={{ marginBottom: "20px", marginLeft: 20 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", margin: 0 }}>
          <Typography style={{ marginRight: 30, align: "right" }}>
            Rate
          </Typography>
          <TextField
            label="Rate"
            id="outlined-size-small"
            size="small"
            type="Number"
            onChange={handleRate}
            style={{ marginBottom: "20px", marginLeft: 20 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", margin: 5 }}>
          <Typography style={{ marginRight: 5 }}>Duration</Typography>
          <TextField
            label="Duration(year)"
            id="outlined-size-small"
            size="small"
            type="Number"
            onChange={handleDuration}
            style={{ marginBottom: "20px", marginLeft: 20 }}
          />
        </Box>

        {submit}
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleClear}
          disabled={rate === "" && principale === "" && duration === ""}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};
export default SimpleInterest;
