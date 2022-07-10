import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Select, InputLabel, MenuItem, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Audio from "./Audio";
import styled from "styled-components";
import Record from "./Record";
import { useContext, createContext } from "react";

function Main() {
  let frequency = [220, 233, 246, 261, 277, 293, 311, 329, 349, 369, 391, 415];
  const [lang, setLang] = useState("en");

  const [index, setIndex] = useState(-1);

  const [scale, setScale] = useState([
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ]);

  const [rand, setRand] = useState(0);
  const [answer, setAnswer] = useState("none");
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    if (answer == "none") return;
    setDatas([...datas, { count: count, answer: answer }]);
    console.log(datas);
  }, [count]);

  function changeScale(lang) {
    if (lang == "en") {
      setScale(["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]);
    } else {
      setScale(["ラ", "ラ#", "シ", "ド", "ド#", "レ", "レ#", "ミ", "ファ", "ファ#", "ソ", "ソ#"]);
    }
  }

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">言語選択</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="en"
            name="radio-buttons-group"
            onChange={(e) => changeScale(e.target.value)}
          >
            <FormControlLabel value="en" control={<Radio />} label="英語表記" />
            <FormControlLabel value="jp" control={<Radio />} label="日本語表記" />
          </RadioGroup>
          <FormLabel id="demo-simple-select-label">sound</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => setIndex(e.target.value)}
          >
            {scale.map((sc, index) => {
              return <MenuItem value={index}>{sc}</MenuItem>;
            })}
          </Select>
          <Audio setAnswer={setAnswer} setCount={setCount} count={count} answer={index} />
        </FormControl>
      </Grid>
      <Grid item sm={12}>
        <Record datas={datas} />
      </Grid>
    </Grid>
  );
}

export default Main;
