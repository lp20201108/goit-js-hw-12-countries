import './css/style.css';
import _ from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './js/fetchCountries.js';


const refs = {
  container: document.querySelector('.container'),
  input: document.querySelector('.query'),
 
}

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


