import { Box, Button, ButtonGroup, TextField } from "@mui/material";

const WebCalculator = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        backgroundColor: "yellow",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        margin: "20px",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally (optional here)
          alignItems: "center", // Center vertically
          backgroundColor: "pink",
          padding: "20px", // Optional for better design
          borderRadius: "10px", // Optional for rounded corners
          height: "50%",
          width: "50%",
          flexDirection: "column",
        }}
      >
        <TextField id="outlined-search" type="search" />
        <Box style={{ margin: 10, display:"flex", flexDirection:"column" }}>
          <ButtonGroup aria-label="Basic button group">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>+</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic button group">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic button group">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>*</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic button group">
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
            <Button>/</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default WebCalculator;
