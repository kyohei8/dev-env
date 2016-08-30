import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App test={100}></App>, document.getElementById('app'));

