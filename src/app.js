import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const body = req.body;

  users.push(body);
  console.log(users);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const body = req.body;

  tweets.unshift(body);
  console.log("tweets", tweets);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length === 0) {
    res.send(tweets);
    return;
  }

  const newTweets = [];

  for (let i = 0; i < 10 && i < tweets.length; i++) {
    const use = users.find((u) => tweets[i].username === u.username);
    console.log("use", use);
    newTweets.push({ ...use, tweet: tweets[i].tweet });

    console.log("newTweets", newTweets);
  }

  res.send(newTweets);
});

app.listen(5000, () => console.log("App ativo na porta 5000"));
