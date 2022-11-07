import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const isUndefined = username === undefined || avatar === undefined;
  const isEmpty = username === "" || avatar === "";

  if (isUndefined || isEmpty) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  users.push({ username, avatar });
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  const isUndefined = username === undefined || tweet === undefined;
  const isEmpty = username === "" || tweet === "";

  if (isUndefined || isEmpty) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  tweets.unshift({ username, tweet });
  res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length === 0) {
    res.send(tweets);
    return;
  }

  const newTweets = [];

  for (let i = 0; i < 10 && i < tweets.length; i++) {
    const use = users.find((u) => tweets[i].username === u.username);

    newTweets.push({ ...use, tweet: tweets[i].tweet });
  }

  res.send(newTweets);
});

app.listen(5000, () => console.log("App ativo na porta 5000"));
