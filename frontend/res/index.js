
const url = "/bielefeld";
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const stationsPromise = fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
          })
          .catch((err) => {
            console.log(err);
          })

async function getStations(){
  const result = await stationsPromise;
  console.log(result);
  return result.data;
}

const stations = getStations();
console.log(stations);
