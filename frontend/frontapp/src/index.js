import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { useState } from 'react'
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');




ReactDOM.render(
  
  <React.StrictMode>
   <App   />
   </React.StrictMode>,
  document.getElementById('root')
);