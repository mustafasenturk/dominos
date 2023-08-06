import {configureStore} from '@reduxjs/toolkit';
import {productReducer} from './reducer';

const reducers = {
  basket: productReducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
