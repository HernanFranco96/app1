import mongoose from "mongoose";

// Como quiero guardar el dato
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, //limpia espacios
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // fecha de creacion
  }
);

// User nos servira para interactuar con la DB con metodos
export default mongoose.model("User", userSchema);
