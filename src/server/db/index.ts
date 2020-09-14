import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

// export const connection = mysql.createPool(config.mysql);

var connection;

function dbConnection() {
  connection = mysql.createConnection(config.mysql);

  connection.connect(function (error) {
    if (error) {
      console.log("DB Connection Error>>>", error);
      setTimeout(dbConnection, 3000);
    }
  });
  connection.on("Error", function (error) {
    console.log("DATABASE ERROR", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      dbConnection();
    } else {
      throw error;
    }
  });
}

dbConnection();

export default {
  Bundles,
};
