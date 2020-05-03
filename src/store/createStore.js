import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlerware) => {
  const enhacer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlerware))
      : applyMiddleware(...middlerware);
  return createStore(reducers, enhacer);
};
