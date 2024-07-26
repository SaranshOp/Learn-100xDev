const express = require("express");
// module js
// import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

// get a list of 5 jokes

app.get("/jokes", (req, res) => {
  res.json([
    {
      id: 1,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 2,
      joke: "I'm reading a book on the history of glue. I just can't seem to put it down.",
    },
    {
      id: 3,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 4,
      joke: "What do you get when you cross a snowman and a vampire? Frostbite.",
    },
    {
      id: 5,
      joke: "I invented a new word! Plagiarism.",
    },
  ]);
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.json({ sum });
});

app.get("/sumof", (req, res) => {
  const n = parseInt(req.query.n);
  const sum = (n * (n + 1)) / 2;
  res.send(sum);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server at http://localhost:${PORT}`);
});
