import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const NumberToWords = () => {
  const [number, setNumber] = useState("");
  const [words, setWords] = useState("");

  const numberToWords = (num) => {
    if (num === 0) return "zero";

    const belowTwenty = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    const thousands = ["", "thousand", "million", "billion"];

    const convertToWords = (n) => {
      if (n < 20) return belowTwenty[n];
      if (n < 100)
        return (
          tens[Math.floor(n / 10)] +
          (n % 10 !== 0 ? "-" + belowTwenty[n % 10] : "")
        );
      if (n < 1000)
        return (
          belowTwenty[Math.floor(n / 100)] +
          " hundred" +
          (n % 100 !== 0 ? " and " + convertToWords(n % 100) : "")
        );
      for (let i = 0, unit = 1000; i < thousands.length; i++, unit *= 1000) {
        if (n < unit * 1000) {
          return (
            convertToWords(Math.floor(n / unit)) +
            " " +
            thousands[i] +
            (n % unit !== 0 ? " " + convertToWords(n % unit) : "")
          );
        }
      }
    };

    return convertToWords(num);
  };

  const handleConvert = () => {
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setWords("Please enter a valid number");
    } else {
      setWords(numberToWords(num));
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        marginTop: "50px",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
        borderRadius: "10px",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Number to Words Converter
        </Typography>
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
          onClick={handleConvert}
          style={{ marginBottom: "20px" }}
        >
          Convert
        </Button>
        {words && (
          <Typography variant="h6" color="textSecondary">
            {words}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default NumberToWords;
