import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));
