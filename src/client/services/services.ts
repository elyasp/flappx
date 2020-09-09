import axios from "axios";

export async function getBundles() {
  let bundles;
  await fetch("/bundles")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      bundles = data;
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
