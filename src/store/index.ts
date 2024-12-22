import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user';

const store = configureStore({
  reducer: {
    // user 为 reducer 的名字，可导出多个模块的 reducer
    user: userReducer,
  },
});

export default store;
