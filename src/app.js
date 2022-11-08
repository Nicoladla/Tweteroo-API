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

  const isRegistered = users.find((u) => u.username === username);

  if (isRegistered) {
    return res.status(409).send("Usuário já cadastrado!");
  }

  if (isUndefined || isEmpty) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  users.push({ username, avatar });
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const username = req.headers.user;

  console.log(".user", username);

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
    return res.send(tweets);
  }

  tweets.forEach((tweet) => {
    const {avatar} = users.find((user) => user.username === tweet.username)
  
    tweet.avatar = avatar;
  });

  res.send(tweets.slice(0, 10));
});

app.get("/tweets/:USERNAME", (req, res) => {
  const user = req.params.USERNAME;

  const listTweets = tweets.filter((tweet) => tweet.username === user);

  res.send(listTweets);
});

app.listen(5000, () => console.log("App ativo na porta 5000"));
