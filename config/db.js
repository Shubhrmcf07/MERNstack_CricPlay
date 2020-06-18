const mongoose = require('mongoose');
// "mongodb+srv://user-abhi:cluster-abhi@cluster1-abhi-qjpjx.mongodb.net/test?authSource=admin&replicaSet=Cluster1-Abhi-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const connectDB = async () => {
  try {
    await mongoose.connect( "mongodb+srv://user-abhi:cluster-abhi@cluster1-abhi-qjpjx.mongodb.net/Cluster1-Abhi?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = connectDB;