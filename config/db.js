const mongoose = require('mongoose')

const connectDb = async () => {
   try {
      const connect = await mongoose.connect('mongodb+srv://devesabbir:RAg3CHuwPr.kEUK@cluster0.v8yay.mongodb.net/FirstDataBase?retryWrites=true&w=majority')
      console.log(`Our MongoDB Database Established HOST: ${connect.connection.host}`.blue);
   } catch (error) {
       console.log(`${error}`.red);
   }
}


module.exports  = connectDb
