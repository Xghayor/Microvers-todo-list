import './style.css';
import { createItems, tasks } from './createItems.js';

document.addEventListener('DOMContentLoaded', () => {
  createItems(tasks);
});
