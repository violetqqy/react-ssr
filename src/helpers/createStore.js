import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducer from '../client/reducer';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(reducer, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

  return store;
}