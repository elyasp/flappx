import axios from "axios";

export async function getBundles() {
  let bundles;
  await axios
    .get("/bundles")
    .then((response) => {
      console.log(">>>>>", response);
      return response;
    })
    .then((res) => {
      console.log("DATA>>", res.data);
      bundles = res.data;
    });
  return bundles;
}

export async function createBundle(bundleData) {
  console.log("received in services", JSON.stringify(bundleData));

  axios
    .post("/bundles/add", bundleData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("Response in Services", res.data);
    })
    .catch((error) => {
      console.log("ERROR in services", error);
    });
}

export async function deleteBundle(bundle) {
  console.log("received in services", bundle);

  axios
    .post("/bundles/delete", bundle, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("Response in Services", res);
    })
    .catch((error) => {
      console.log("ERROR in services", error);
    });
}
