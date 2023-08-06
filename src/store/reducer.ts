import {createReducer} from '@reduxjs/toolkit';
import {add, changeCount, clearBasket, del} from './actions';
import {IInitialState} from './types';

const initialState: IInitialState = {
  products: [],
};

export const productReducer = createReducer(initialState, builder => {
  builder
    .addCase(add, (state, action) => {
      action.payload.count = 1;
      const index = state.products.findIndex(item => item.id === action.payload.id);
      index !== -1 ? state.products[index].count += action.payload.count : state.products.push(action.payload);
    })
    .addCase(del, (state, action) => {
      const index = state.products.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.products.splice(index, 1);
    })
    .addCase(changeCount, (state, {payload: {id, count}}) => {
      const index = state.products.findIndex(item => item.id === id);
      if (index !== -1) {
        state.products[index].count += count;
      }
    })
    .addCase(clearBasket, state => {
      state.products = [];
    });
});
