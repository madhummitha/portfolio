import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("No MongoDB URI provided");
}

let cachedConnection = global.mongoose;

if (!cachedConnection) {
  cachedConnection = global.mongoose = {conn:null, promise: null}
}

export default async function connectDB() {
  if (cachedConnection.conn) {
    return cachedConnection.conn;
  }

  if(!cachedConnection.promise) {
    const opts = {bufferCommands:false}
    cachedConnection.promise = mongoose.connect(MONGO_URI, opts).then((m) => {
      console.log("Connected to MongoDB");
      return m;
    })
  }
  try {
    cachedConnection.conn = await cachedConnection.promise;
  } catch (error) {
    cachedConnection.promise = null;
    throw error
  }
  return cachedConnection.conn;

  // if (!mongoose.connections[0]) {
  //   mongoose.connect(MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });

  //   mongoose.connection.on("connected", () => {
  //     console.log("Connected to MongoDB");
  //   });

  //   mongoose.connection.on("error", (err) => {
  //     console.log("Error connecting to MongoDB", err);
  //   });
  // }

  // cachedConnection = mongoose.connections[0];

  // return cachedConnection;
}
