import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { SelectAllRounded } from "@mui/icons-material";

function Selector(props) {
  let lang = props.lang;
  let Scale;

  if (lang == "en") {
    Scale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  } else {
    Scale = ["ラ", "ラ#", "シ", "ド", "ド#", "レ", "レ#", "ミ", "ファ", "ファ#", "ソ", "ソ#"];
  }

  return (
    <select name="audio" id="selector" required>
      <option value="-1" hidden>
        Choose
      </option>
      {Scale.map((scale, index) => {
        return <option value={index}>{scale}</option>;
      })}
    </select>
  );
}

export default Selector;
