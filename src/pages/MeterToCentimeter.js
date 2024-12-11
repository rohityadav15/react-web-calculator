// const MeterToCentimeter=()=>{
//     return(
//         <>
//         Change Meter to centimeter
//         </>
//     )
// }
// export default MeterToCentimeter;
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";

function FactorialApp() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  // Factorial calculation function
  const calculateFactorial = (num) => {
    if (num < 0) return "Invalid input! Enter a non-negative number.";
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setResult("Please enter a valid number!");
    } else {
      const factorialResult = calculateFactorial(num);
      setResult(factorialResult);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Box
          sx={{
            padding: 3,
            border: "1px solid #ccc",
           borderRadius: "10px",
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Factorial Calculator
          </Typography>
          <form onSubmit ={handleSubmit}>
            <TextField
              label="Enter a number"
              variant="outlined"
              fullWidth
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ padding: "10px 0", fontSize: "16px" }}
            >
              Calculate Factorial
            </Button>
          </form>
          {result !== null && (
            <Typography
              variant="h6"
              component="div"
              style={{ marginTop: "20px", color: "#3f51b5" }}
            >
              <strong>Result:</strong> {result}
            </Typography>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default FactorialApp;
