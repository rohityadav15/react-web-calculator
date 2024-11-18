import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";

const WebCalculator = () => {
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

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        margin: "20px",
      }}
    >
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
        <TextField
          id="calculator-display"
          variant="outlined"
          value={result !== null ? result : expression}
          style={{ width: "100%", marginBottom: "20px" }}
          inputProps={{ readOnly: true }}
        />
        <Box style={{ margin: 10, display: "flex", flexDirection: "column" }}>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button onClick={() => handleButtonClick("7")}>7</Button>
            <Button onClick={() => handleButtonClick("8")}>8</Button>
            <Button onClick={() => handleButtonClick("9")}>9</Button>
            <Button onClick={() => handleButtonClick("+")}>+</Button>
          </ButtonGroup>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button onClick={() => handleButtonClick("4")}>4</Button>
            <Button onClick={() => handleButtonClick("5")}>5</Button>
            <Button onClick={() => handleButtonClick("6")}>6</Button>
            <Button onClick={() => handleButtonClick("-")}>-</Button>
          </ButtonGroup>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button onClick={() => handleButtonClick("1")}>1</Button>
            <Button onClick={() => handleButtonClick("2")}>2</Button>
            <Button onClick={() => handleButtonClick("3")}>3</Button>
            <Button onClick={() => handleButtonClick("*")}>*</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => handleButtonClick("0")}>0</Button>
            <Button onClick={() => handleButtonClick(".")}>.</Button>
            <Button onClick={() => handleButtonClick("=")}>=</Button>
            <Button onClick={() => handleButtonClick("/")}>/</Button>
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
  );
};

export default WebCalculator;