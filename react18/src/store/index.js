import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import testAxiosReducer from './test-axios';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    testAxios: testAxiosReducer
  },
});
