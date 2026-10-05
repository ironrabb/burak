import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** Product */
/** User */
routerAdmin.get("/check-me", restaurantController.checkAuthSession); // test maqsadi
routerAdmin.get("/logout", restaurantController.logout); // test maqsadi
export default routerAdmin;
// 28:30 ga keldim
