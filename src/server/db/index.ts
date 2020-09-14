import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

export const Connection = mysql.createPool(config.mysql);

// Connection.connect(function (error) {
//   if (error) {
//     console.log("DB Connection Error>>>", error);
//     setTimeout(handleError, 3000);
//   }
// });

function handleError() {
  var connection = mysql.createConnection(config.mysql);

  connection.on("error", function (error) {
    console.log("DATABASE DISCONNECTED", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleError();
    } else {
      throw error;
    }
  });
}

handleError();

export default {
  Bundles,
};
