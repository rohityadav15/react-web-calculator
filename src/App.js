import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Calculator from "./pages/Calculator";
import Factorial from "./pages/Factorial";
import Age from "./pages/Age";
import SimpleInterest from "./pages/SimpleInterest";
import CompoundInterest from "./pages/CompoundInterest";
import NumberToWords from "./pages/NumberToWords";
import ChangeMeter from "./pages/ChangeMeter";

const WebCalculator = () => {
  return (
    <>
      <Router>
        <Box>
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              // width: "90%",
              alignItems: "center",
              // justifyContent:"center",
              backgroundColor: "black",
              padding: 8,
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>

            <Link
              to="/calculator"
              style={{ color: "white", textDecoration: "none" }}
            >
              Calculator
            </Link>
            <Link
              to="/factorial"
              style={{ color: "white", textDecoration: "none" }}
            >
              Factorial
            </Link>
            <Link
              to="/simpleInterest"
              style={{ color: "white", textDecoration: "none" }}
            >
              Simple Interest
            </Link>
            <Link
              to="/compoundInterest"
              style={{ color: "white", textDecoration: "none" }}
            >
              Compound Interest
            </Link>
            <Link
              to="/changeMeter"
              style={{ color: "white", textDecoration: "none" }}
            >
            Change Meter
            </Link>
            <Link
              to="/age"
              style={{ color: "white", textDecoration: "none" }}
            >
              Age
            </Link>
            <Link
              to="/numberToWords"
              style={{ color: "white", textDecoration: "none" }}
            >
              Number To Words
            </Link>
          </nav>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            width: "215vh",
            height:"90vh",
            margin:"1%",
            borderRadius:"1%",
            // position:"fixed",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/factorial" element={<Factorial />} />
            <Route path="/simpleInterest" element={<SimpleInterest />} />
            <Route path="/compoundInterest" element={<CompoundInterest />} />
            <Route path="/age" element={<Age />} />
            <Route path="/changeMeter" element={<ChangeMeter />} />
            <Route path="/numberToWords" element={<NumberToWords />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
};

export default WebCalculator;
