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

app.listen(5000, () => console.log("App ativo na porta 5000"));
