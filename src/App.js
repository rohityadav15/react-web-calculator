import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Factorial from "./pages/Factorial";
import RupeesToDollor from "./pages/RupeesToDllor";
import SimpleInterest from "./pages/SimpleInterest";

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
              to="/rupeesToDollor"
              style={{ color: "white", textDecoration: "none" }}
            >
              Rupees To Dollor
            </Link>
          </nav>
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/factorial" element={<Factorial />} />
            <Route path="/simpleInterest" element={<SimpleInterest />} />
            <Route path="/rupeesToDollor" element={<RupeesToDollor />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
};

export default WebCalculator;
