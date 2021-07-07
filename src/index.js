import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers/CombineReducer'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from "firebase/app";
import fbConfig from './Components/Config/fbconfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase,fbConfig)
  )
);
const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
  </ReactReduxFirebaseProvider>
</Provider>,
  document.getElementById('root')
);
