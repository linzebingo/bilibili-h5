import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import * as FastClick from 'fastclick';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('page'));
// console.log(FastClick.defaul);

// use fastclick to solve 300ms delay in webapp
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      (FastClick as any).attach(document.body);
    },
    false
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
