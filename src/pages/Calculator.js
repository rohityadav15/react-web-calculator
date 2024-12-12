import {
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult(null);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  console.log("====>", expression);
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "90vw",
          margin: "20px",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "20px",
            // height: "50%",
            width: "25%",
            flexDirection: "column",
            border: "1px solid blue",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <TextField
            id="calculator-display"
            variant="outlined"
            value={result !== null ? result : expression}
            style={{ width: "50%", marginBottom: "20px", marginTop: "20px" }}
            inputProps={{ readOnly: true }}
          />
          <Typography varoant="h4">Total Calculation = {result}</Typography>
          <Box style={{ margin: 10, display: "flex", flexDirection: "column" }}>
            <ButtonGroup
              style={{
                marginBottom: 10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              <Button onClick={() => handleButtonClick("7")} color="white">
                7
              </Button>
              <Button onClick={() => handleButtonClick("8")} color="white">
                8
              </Button>
              <Button onClick={() => handleButtonClick("9")} color="white">
                9
              </Button>
              <Button onClick={() => handleButtonClick("+")} color="white">
                +
              </Button>
            </ButtonGroup>
            <ButtonGroup
              style={{
                marginBottom: 10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              <Button onClick={() => handleButtonClick("4")} color="white">
                4
              </Button>
              <Button onClick={() => handleButtonClick("5")} color="white">
                5
              </Button>
              <Button onClick={() => handleButtonClick("6")} color="white">
                6
              </Button>
              <Button onClick={() => handleButtonClick("-")} color="white">
                -
              </Button>
            </ButtonGroup>
            <ButtonGroup
              style={{
                marginBottom: 10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              <Button onClick={() => handleButtonClick("1")} color="white">
                1
              </Button>
              <Button onClick={() => handleButtonClick("2")} color="white">
                2
              </Button>
              <Button onClick={() => handleButtonClick("3")} color="white">
                3
              </Button>
              <Button onClick={() => handleButtonClick("*")} color="white">
                *
              </Button>
            </ButtonGroup>
            <ButtonGroup style={{ backgroundColor: "black", color: "white" }}>
              <Button onClick={() => handleButtonClick("0")} color="white">
                0
              </Button>
              <Button onClick={() => handleButtonClick(".")} color="white">
                .
              </Button>
              <Button onClick={() => handleButtonClick("=")} color="white">
                =
              </Button>
              <Button onClick={() => handleButtonClick("/")} color="white">
                /
              </Button>
            </ButtonGroup>
          </Box>
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={() => handleButtonClick("C")}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Calculator;
