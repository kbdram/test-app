import mongoose from "mongoose";
import { paymentSchema } from "../models/customerModels";

const payment = mongoose.model("payment", paymentSchema);

// testing
// this is in login branch
// get all payment details
export const getPaymentDetails = (req, res) => {
  payment.find({}, (err, payments) => {
    if (err) {
      res.send(err);
    }
    res.json(payments);
  });
};
