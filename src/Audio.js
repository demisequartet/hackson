import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import styled from "styled-components";
import { useState, useContext } from "react";

function Audio(props) {
  let setAnswer = props.setAnswer;
  let setCount = props.setCount;
  let count = props.count;
  let answer = props.answer;
  let frequency = [220, 233, 246, 261, 277, 293, 311, 329, 349, 369, 391, 415];

  const [Rand, setRand] = useState(Math.floor(Math.random() * frequency.length));

  const [Played, setPlayed] = useState(false);

  function handleClick() {
    console.log("play!");
    setPlayed(true);

    let ctx = new AudioContext();

    let osc = ctx.createOscillator();

    osc.frequency.value = frequency[Rand];
    console.log(frequency[Rand]);
    osc.type = "sine";
    osc.connect(ctx.destination);
    osc.start(0);
    osc.stop(3);
  }

  function randInit() {
    console.log("randinit");
    setRand(Math.floor(Math.random() * frequency.length));
    setPlayed(false);
  }

  function submit() {
    console.log("submit");
    if (!Played) {
      alert("音を再生してください");
      return;
    }

    if (answer == -1) {
      alert("答えを選択してください");
      return;
    }

    if (answer == Rand) {
      setCount(count + 1);
      setAnswer("正解");
      alert("正解");
    } else {
      setCount(count + 1);
      setAnswer("不正解");
      alert("不正解");
    }
  }

  return (
    <Box>
      <Button onClick={handleClick}>音を再生</Button>
      <Button onClick={randInit}>音を変更</Button>
      <Button onClick={submit}>答えを送信</Button>
    </Box>
  );
}

export default Audio;
