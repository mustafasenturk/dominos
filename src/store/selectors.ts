import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

const productSelector = (state: RootState) => state;

export const selectBasket = createSelector(
  productSelector,
  state => state.basket,
);
