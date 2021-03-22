import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css';   // 引入 antd 的样式文件
import './static/css/index.css';


import store from './store';
import { Provider } from 'react-redux';

import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


