import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

export const Connection = mysql.createPool(config.mysql);

// Connection.connect((error) => {
//   if (error) console.log(error);
// });

export default {
  Bundles,
};
