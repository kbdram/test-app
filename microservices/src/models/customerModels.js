import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const paymentSchema = new Schema({
  userId: {
    type: String,
    required: "Please enter user email id",
  },
  courseId: {
    type: String,
    required: "please enter course id",
  },
  amount: {
    type: Number,
    required: "automatic generated amount",
  },
  mode: {
    type: String,
  },
  status: {
    type: String,
  },
  card: {
    type: Object,
    required: "please enter card details.",

    lastFourNumbers: {
      type: Number,
    },
    expiryMonth: {
      type: Number,
      required: "Please enter expiry month",
    },
    expiryYear: {
      type: Number,
      required: "Please enter expiry month",
    },
    cvvVerified: {
      type: Boolean,
    },
  },
  token: {
    type: String,
  },
});
