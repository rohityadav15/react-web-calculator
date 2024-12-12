import { useState } from "react";

const { Box, Typography, TextField, Button } = require("@mui/material");

const Age = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const handleDob = (e) => {
    setDob(e.target.value);
  };

  const handleAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    setAge(calculatedAge);
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius:"5px",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
        alignItems:"center",
        width:"40%",
        justifyContent:"center",
      }}
    >
      <Typography variant="h5" m={3}>
        Calculate Age
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row", m: 3 }}>
        <Typography mt={1} mr={1}>
          Enter DOB :
        </Typography>
        <TextField
        style={{width:"150px"}}
          size="small"
          onChange={handleDob}
          sx={{ marginBottom: 2, width: "300px" }}
        />
      </Box>
      <Box m={3}>Age = {age}</Box>
      <Button
        m={3}
        variant="contained"
        color="primary"
        onClick={handleAge}
        sx={{ marginBottom: 2, width:"100px" }}
      >
        Calculate
      </Button>
    </Box>
  );
};
export default Age;
