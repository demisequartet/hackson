import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Select, InputLabel, MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import Audio from "./Audio";
import styled from "styled-components";

function Record(props) {
  let datas = props.datas; //datasは辞書の配列

  let contents = datas.map((data) => {
    return (
      <li key={data.count}>
        {data.count}回目は{data.answer}です
      </li>
    );
  });

  return (
    <div>
      <h1>記録</h1>
      <ul>{contents}</ul>
    </div>
  );
}

export default Record;
