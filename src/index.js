import './css/style.css';
import _ from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
import fetchCountries from './js/fetchCountries.js';
import countryResultMarkup from './templates/country_result.hbs';
import countriesList from './templates/countries_list.hbs';
import refs from './js/refs.js';


refs.input.addEventListener(
  'input',
  _.debounce(event => {
       const inputValue = event.target.value;
    
     if (inputValue.length === 0) {
        refs.container.innerHTML = "";
        refs.container.classList.remove('visible');
    }
    fetchCountries(event.target.value);
  }, 500),
);


export default function markup(data) {
  refs.container.classList.add('visible');
 if (data.length > 1 && data.length <= 10 && data.length !==0 ) {
    // console.log(data);
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

