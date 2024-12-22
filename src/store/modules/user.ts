import { createSlice, Dispatch } from '@reduxjs/toolkit';

const userStore = createSlice({
  // user 为模块的名字
  name: 'user',
  initialState: {
    userInfo: {
      name: 'Samdy_Chan',
      age: 18,
      addr: 'gz',
    },
  },
  reducers: {
    incrAge(state, action) {
      state.userInfo.age += action.payload;
    },
    decrAge(state, action) {
      state.userInfo.age -= action.payload;
    },
  },
});

const { incrAge, decrAge } = userStore.actions;

const userReducer = userStore.reducer;

// 定义异步 action
function asynIncrAge(val) {
  return async (dispatch: Dispatch) => {
    const waitIncr = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(val);
        }, 1000);
      });
    };

    const plusAge = await waitIncr();
    dispatch(incrAge(plusAge));
  };
}

export { incrAge, decrAge, asynIncrAge, userStore };

export default userReducer;
