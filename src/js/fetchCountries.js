
import markup from '../index.js';

export default function fetchService(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
           markup(data);
    })
    .catch(err => console.log(err));
}




