import { Box, TextField, Typography } from "@mui/material";

const CompoundInterest = () => {
  return (
    <Box style={{display:"flex", flexDirection:"row"}}>
      <Box>
        <Typography>Amount (A)</Typography>
        <Typography>Principle(P)</Typography>

        <Typography>Interest(R)</Typography>
        <Typography>Number of interest in year (N)</Typography>
        <Typography>Time in Year(T)</Typography>
      </Box>
      <Box style={{display:"flex", flexDirection:"column"}}>
        <TextField 
        type="Numer"
        size="small"
        />
         <TextField 
        type="Numer"
        size="small"
        />
         <TextField 
        type="Numer"
        size="small"
        />
         <TextField 
        type="Numer"
        size="small"
        />
         <TextField 
        type="Numer"
        size="small"
        />

      </Box>
    </Box>
  );
};
export default CompoundInterest;
