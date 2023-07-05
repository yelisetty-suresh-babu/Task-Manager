const exp = require("express");
const tasks = require("./routes/tasks");
const app = exp();
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server started at ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

app.use(exp.json());

app.use("/api/v1/tasks", tasks);
start();

