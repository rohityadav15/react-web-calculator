import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Factorial = () => {
  const [factorialValue, setFactorialValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleFactorialValue = (e) => {
    setFactorialValue(parseInt(e.target.value, 10));
  };

  const calculateFactorial = (n) => {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const handleSubmit = () => {
    const r = calculateFactorial(factorialValue);
    setResult(r);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        style={{
          display: "flex",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          width: "40%",
          flexDirection: "column",
          justifyContent: "center",
        alignItems: "center",
        marginBottom:"20px",
        paddingBottom:"20px"
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Typography>Enter the value:</Typography>
          <TextField
            label="Number"
            id="outlined-size-small"
            size="small"
            type="number"
            onChange={handleFactorialValue}
            style={{ marginBottom: "20px", marginLeft: 20, marginTop: 20 }}
          />
        </Box>
        {result !== null && (
          <Typography style={{ marginBottom: 20 }}>
            Factorial: {result}
          </Typography>
        )}
        <Box>
          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{ marginTop: 20 }}
          >
            Calculate Factorial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Factorial;
