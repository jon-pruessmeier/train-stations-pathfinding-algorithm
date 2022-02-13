
const url = "/bielefeld";
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

let stations = [];
const start = document.getElementById('start');
const end = document.getElementById('end');

const stationsPromise = fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            stations = myJson.list.map(elem => elem.title);
            stations.sort();

          })
          .then(() => {

            for (let i = 0; i < stations.length; i++){

              //it is a bit confusing, but it just works when I create two distinct elements
              let optionStart = document.createElement('option');
              let optionEnd = document.createElement('option');
              optionStart.text = stations[i];
              optionEnd.text = stations[i];
              start.add(optionStart);
              end.add(optionEnd);
            }

          })
          .catch((err) => {
            console.log(err);
          })

let button;

document.addEventListener('DOMContentLoaded', () => {
  button = document.getElementById('btn');
  console.log(button);

  button.addEventListener('click', () => {
    console.log("HELLO")
    const startVal = start.options[start.selectedIndex].text;
    const endVal = end.options[end.selectedIndex].text;
    console.log(startVal);
    console.log(endVal);

    const urlRequest = url + `/${startVal}` + `/${endVal}`;
    const response = fetch(urlRequest, options)
      .then ((response) => {
        return response.json();
      })

      .then ((myJson) => {
        let solution = "";
        for (let i = 0; i < myJson.length; i++){
          solution += myJson[i];
          if (i !== myJson.length -1){
            solution += "\r\n\r\n"
          }
        }
        const answerP = document.getElementById('answerText');
        answerP.textContent = solution;
      })

      .catch( (err) => {
        console.log(err);
      })

  });


})
