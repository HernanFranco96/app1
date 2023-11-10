import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://HernanFranco96:qu7jiAd2K6d0Q743@hernanfranco96.fgepwef.mongodb.net/app-tareas"
    );
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
