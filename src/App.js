import axios from "axios";
import React from "react";
import Logo from "./Logo";
import Main from "./Main";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "10px" }}>
      <Logo />
      <Main />
    </Container>
  );
}

export default App;
