import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 1; i <= 100000000; i++) {
    sum += i;
  }
  res.send(`The sum of numbers from 1 to 1,000,000 is: ${sum}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
