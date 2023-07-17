import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); //only place we're fetching from the DOM.

root.render(<App />);
