import {createAction} from '@reduxjs/toolkit';
import {IProduct} from './types';

export const add = createAction<IProduct>('ACTION/ADD');
export const del = createAction<{id: number}>('ACTION/DEL');
export const clearBasket = createAction('ACTION/CLEAR');
export const changeCount = createAction<{id: number; count: number}>(
  'ACTION/COUNT_CHANGE',
);
