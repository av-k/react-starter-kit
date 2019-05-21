import React from 'react';
import ReactDOM from 'react-dom';
//
import { Root } from 'pages';
import { NODE_ENV } from 'config/constants';

if (NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

const rootElement = (() => {
  const element = document.createElement('div');
  element.id = 'root';
  return element;
})();

document.body.appendChild(rootElement);
export const MOUNT_NODE = document.body;
ReactDOM.render(<Root />, MOUNT_NODE);
