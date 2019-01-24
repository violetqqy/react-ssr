import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

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
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...NotFoundPage
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
