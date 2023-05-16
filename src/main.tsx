import React from 'react';
import ReactDOM from 'react-dom';

import '@config/i18n';

import App from './App';


import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
