import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

export const Connection = mysql.createConnection(config.mysql);

function handleError() {
  var connection = mysql.createConnection(config.mysql);

  connection.on("error", function (error) {
    console.log("DATABASE DISCONNECTED", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleError();
    } else {
      console.log(error.code);
      handleError();
    }
    connection.connect((error) => {
      if (error) {
        console.log(error);
      }
      console.log("SQL Connection succeeded...");
    });
  });
}

handleError();

export default {
  Bundles,
};
