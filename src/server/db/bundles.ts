import { connection } from "./index";

export const all = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM package", (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

export const create = async (
  name: string,
  bundle: string,
  company: string,
  email: string,
  active: boolean,
  category: string
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO package VALUES ("${name}", "${bundle}", "${company}", "${email}", ${active}, "${category}");`,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );
  });
};

export const remove = async (bundle: string) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM package WHERE bundle="${bundle}";`,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );
  });
};

export default {
  all,
  create,
  remove,
};
