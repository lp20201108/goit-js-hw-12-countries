import './css/style.css';
import _ from 'lodash';
import fetchCountries from './js/fetchCountries.js';


const input = document.querySelector('.query');

// console.log(input);

input.addEventListener(
  'input',
  _.debounce(event => {
    fetchCountries(event.target.value);
  }, 500),
);