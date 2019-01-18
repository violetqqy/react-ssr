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

import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom//server';
// import Home from './client/components/Home';
import renderer from './helpers/renderer';

const app = express();

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

  res.send(renderer(req));
});

app.listen(3003, () => {
  console.log('Listening on port 3003');
});
