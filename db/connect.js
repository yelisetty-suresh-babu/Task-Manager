const mongoose = require("mongoose");
// const connectionString =
//   "mongodb+srv://suresh:sure sh@cluster0.tzmtb9n.mongodb.net/Task-manager?retryWrites=true&w=majority";

const connect = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connect;
//   .then(() => {
//     console.log("connected to the DB....");
//   })
//   .catch((err) => console.log(err));
