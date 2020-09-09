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
