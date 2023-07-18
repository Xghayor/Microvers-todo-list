import _ from 'lodash';
import './style.css';
import { createItems , tasks } from './createItems.js';


document.addEventListener('DOMContentLoaded', function() {
  createItems(tasks);
});

