const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATA_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Data Base Connected')
} catch (err) {
    console.log(err);
  }
};


module.exports = connectDb