import { getPaymentDetails } from "../controllers/customerController";

const routes = (app) => {
  app.route("/").get(getPaymentDetails);
};

export default routes;
