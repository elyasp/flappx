import * as express from "express";
const bodyParser = require("body-parser");
import DB from "./db";

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.get("/", (req, res, next) => {
//   res.sendStatus(200);
// });

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
      console.log(error);
      res.sendStatus(500);
    });
});

// Delete a bundle
router.delete("/bundles/delete", urlencodedParser, async (req, res, next) => {
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
