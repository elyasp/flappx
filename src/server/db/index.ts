import * as mysql from "mysql";
import config from "../config";
import Bundles from "./bundles";

const initConnection = (config) => {
  function addDisconnectHandler(connection) {
    connection.on("error", function (error) {
      if (error) {
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
          console.error(error.stack);
          console.log("Lost connection. Reconnecting...");
          initConnection(connection.config);
        } else if (error.fatal) {
          throw error;
        }
      }
    });
  }

  connection = mysql.createConnection(config);

  addDisconnectHandler(connection);

  connection.connect();
  return connection;
};

export var connection = initConnection(config.mysql);

export default {
  Bundles,
};
