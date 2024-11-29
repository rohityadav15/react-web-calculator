import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Factorial = () => {
  const [factorialValue, setFactorialValue] = useState(0);

  const handleFactorialValue = (e) => {
    setFactorialValue(e.target.value);
  };
  const handleSubmit = () => {};
console.log("======>", factorialValue)
  return (
    <>
      <Box style={{display:"flex",flexDirection:"row",justifyContent:"center", alignItems:"center", marginTop:50}}>
        <Typography> Enter the value</Typography>
        <TextField
          label="Principale"
          id="outlined-size-small"
          size="small"
          type="Number"
          onChange={handleFactorialValue}
          style={{ marginBottom: "20px", marginLeft: 20, marginTop:20}}
        />
       
      </Box>
      <Button onClick={handleSubmit} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>Factorial</Button>
    </>
  );
};
export default Factorial;
