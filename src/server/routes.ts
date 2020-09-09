import * as express from "express";
const bodyParser = require("body-parser");
import DB from "./db";

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
router.use(bodyParser.json());

// Get all bundles
router.get("/bundles", async (req, res, next) => {
  try {
    let bundles = await DB.Bundles.all();
    res.json(bundles);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Add a bundle
router.post("/bundles/add", urlencodedParser, async (req, res, next) => {
  const { name, bundle, company, email, active, category } = req.body;

  await DB.Bundles.create(name, bundle, company, email, active, category)
    .then((x) => {
      console.log("ADDED RESPONSE:>>>>>>>>>>>>>>", x);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error Adding to Database>>>>>>", error);
      res.sendStatus(500);
    });
});

// Delete a bundle
router.post("/bundles/delete", async (req, res, next) => {
  console.log("ROUTE", req.body);
  const { bundle } = req.body;

  await DB.Bundles.remove(bundle)
    .then((x) => {
      console.log("DELETED RESPONSE:>>>>>>>>>>>>>>", x);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

export default router;
