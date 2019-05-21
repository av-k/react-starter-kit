import React from 'react';
import ReactDOM from 'react-dom';
//
import { Root } from 'pages';

const rootElement = (() => {
  const element = document.createElement('div');
  element.id = 'root';
  return element;
})();

document.body.appendChild(rootElement);
export const MOUNT_NODE = document.body;
ReactDOM.render(<Root />, MOUNT_NODE);
