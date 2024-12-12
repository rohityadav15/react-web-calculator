import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const MeterToCentimeter = () => {
  const [data, setData] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [Centimeter, setCentimeter] = useState(0);
  const [kiloMeter, setKiloMeter] = useState(0);

  const handleMeter = (e) => {
    setData(e.target.value);
  };

  const handleFeet = () => {
    const num = data;
    const f = (num * 100) / 30;
    const fixed = f.toFixed(3);
    setData(num);
    setFeet(fixed);
  };
  const handleCentimeter = () => {
    const num = data;
    const c = num * 100;
    setCentimeter(c);
    setData(num);
  };
  const handleInch = () => {
    const num = data;
    const i = num * 39.37;
    const inch = i.toFixed(3);
    setData(num);
    setInch(inch);
  };
  const handleKiloMeter = () => {
    const num = data;
    const meter = num / 1000;
    setKiloMeter(meter);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid blue",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
        borderRadius: "1.5%",
        width: "40%",
        height: "60vh",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h5" mr={2}>
          Meter:
        </Typography>
        <TextField
          size="small"
          type="Number"
          style={{ width: "200px" }}
          onChange={handleMeter}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          marginTop: "20px",
          boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          borderRadius: "1.5%",
          width: "40%",
          height: "30%",
        }}
      >
        <Typography mt={1} ml={2}>
          Feet = {feet} ft
        </Typography>
        <Typography ml={2}>Centimeter = {Centimeter} cm</Typography>
        <Typography ml={2}>Inch = {inch} inch</Typography>
        <Typography ml={2}>KM = {kiloMeter} km</Typography>
      </Box>
      <Box marginTop={5} style={{ display: "flex" }}>
        <Button
          onClick={handleCentimeter}
          variant="contained"
          style={{ display: "flex", marginRight: "5px" }}
        >
          Centimeter
        </Button>
        <Button
          onClick={handleFeet}
          variant="contained"
          style={{ display: "flex", marginRight: "5px" }}
        >
          Feet
        </Button>
      </Box>
      <Box marginTop={1} style={{ display: "flex" }}>
        <Button
          onClick={handleInch}
          variant="contained"
          style={{ display: "flex", marginRight: "5px" }}
        >
          Inch
        </Button>
        <Button
          onClick={handleKiloMeter}
          variant="contained"
          style={{ display: "flex", marginRight: "5px" }}
        >
          KM
        </Button>
      </Box>
    </Box>
  );
};
export default MeterToCentimeter;
