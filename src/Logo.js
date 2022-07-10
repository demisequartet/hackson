import React from "react";
import { Container, Box, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import styled from "styled-components";

function Logo() {
  return (
    <Container maxWidth="sm" style={{ display: "flex", marginTop: "10px" }}>
      <Typography variant="h3" align="center" color="primary">
        絶対音感チェッカー
      </Typography>
      <MusicNoteIcon sx={{ fontSize: 50 }} />
    </Container>
  );
}

export default Logo;
