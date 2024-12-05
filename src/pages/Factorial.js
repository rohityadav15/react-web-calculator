import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Factorial = () => {
  const [factorialValue, setFactorialValue] = useState(0);

  const handleFactorialValue = (e) => {
    setFactorialValue(e.target.value);
  };
  const handleSubmit = () => {};
  console.log("======>", factorialValue);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Typography> Enter the value</Typography>
        <TextField
          label="Principale"
          id="outlined-size-small"
          size="small"
          type="Number"
          onChange={handleFactorialValue}
          style={{ marginBottom: "20px", marginLeft: 20, marginTop: 20 }}
        />
      </Box>
      <Box>
        <Button
          onClick={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centergit",
          }}
        >
          Factorial
        </Button>
      </Box>
    </Box>
  );
};
export default Factorial;
