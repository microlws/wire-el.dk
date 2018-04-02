import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

function configureStoreProd(history, initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,

    // Connected React Router middleware
    routerMiddleware(history)
  ];

  const connectedReducer = connectRouter(history)(rootReducer);

  return createStore(
    connectedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev(history, initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside
    // a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,

    // Connected React Router middleware
    routerMiddleware(history)
  ];

  const connectedReducer = connectRouter(history)(rootReducer);

  // add support for Redux dev tools
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    connectedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducer", () => {
      const nextReducer = require("../reducer").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
