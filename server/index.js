require("dotenv").config();
const Note = require("./models/note");

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");

const feeTypeRouter = require("./routes/feeTypeRoutes");
const noteRouter = require("./routes/noteRoutes");

app.use(
  cors({})
  // cors({
  //   origin: ["http://localhost:6001"],
  // })
);

app.get("/", (request, response) => {
  response.send("<h1>Hello From Server</h1>");
});

app.use("/api/fees", feeTypeRouter);

app.use("/api/notes", noteRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
