import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

export const Connection = mysql.createConnection(config.mysql);

function handleError() {
  Connection.connect(function (err) {
    if (err) {
      console.log("Database connection error:", err);
      setTimeout(handleError, 2500);
    }
  });

  Connection.on("error", function (error) {
    console.log("DATABASE DISCONNECTED", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleError();
    } else {
      console.log(error.code);
      handleError();
    }
  });
}

handleError();

export default {
  Bundles,
};
