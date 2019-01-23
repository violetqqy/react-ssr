// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

// const app = express();

// app.get('/', (req, res) => {
//   const content = renderToString(<Home />);

//   res.send(content);
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });

/**
 * https://react-ssr-api.herokuapp.com/
 */
import 'babel-polyfill';
import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom//server';
// import Home from './client/components/Home';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  // const content = renderToString(<Home />);
  // const html = `
  //   <html>
  //     <head></head>
  //     <body>
  //       <div id="root">${content}</div>
  //       <script src="bundle.js"></script>
  //     </body>
  //   </html>
  // `;
  const store = createStore(req);

  // Some logic to initialize
  // and load data into the store
  // console.log(matchRoutes(Routes, req.path));
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  // console.log(promises);

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
