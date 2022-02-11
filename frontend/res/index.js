
const url = "/bielefeld";
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const stationsJSON = fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
          })
          .catch((err) => {
            console.log(err);
          })

const stationsObj = JSON.parse(stationsJSON);
console.log(typeof stationsObj);
