import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        // loadData,
        ...UsersListPage,
        path: '/users',
        // component: UsersListPage
      }
    ]
  }
];

// export default [
//   {
//     ...HomePage,
//     path: '/',
//     exact: true
//   },
//   {
//     // loadData,
//     ...UsersListPage,
//     path: '/users',
//     // component: UsersListPage
//   }
// ];

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       { <Route path="/hi" component={() => 'Hi!'} /> }
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };
