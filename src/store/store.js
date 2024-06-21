import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: false
  }).concat(middleWares)
})

// export const persistor = persistStore(store);