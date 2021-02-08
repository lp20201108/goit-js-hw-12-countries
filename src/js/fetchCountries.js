import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
import countryResultMarkup from '../templates/country_result.hbs';
import countriesList from '../templates/countries_list.hbs';

const refs = {
  container: document.querySelector('.container'),
  input: document.querySelector('input'),
 
}


export default function fetchService(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
           markup(data);
    })
    .catch(err => console.log(err));
}


function markup(data) {
  refs.container.classList.add('visible');
 if (data.length > 1 && data.length <= 10 && data.length !==0 ) {
    console.log(data);
    refs.container.innerHTML = countriesList(data);
  }
  else if (data.length > 10) errorMessage();
  else
    refs.container.innerHTML = data.map(country =>
      countryResultMarkup(country),
    ); 
   }

function errorMessage() {
   refs.container.classList.remove('visible');
  error({
    text: 'Too many matches found. Please enter a more specific query.',
    delay: 1500,
  });
}

