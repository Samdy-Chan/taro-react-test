import { View, Text, Button } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
// import { useState } from 'react';
import './index.scss';

import { useDispatch, useSelector } from 'react-redux';
import store from '@/store';
import { asynIncrAge, decrAge, incrAge } from '@/store/modules/user';

// 根据 store.getState 获取 useSelector((state)=>{}) 回调里 state 的参数类型
type StateFunType = typeof store.getState;
type IRootState = ReturnType<StateFunType>;

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  // const [count, setCount] = useState(0);

  const age = useSelector((state: IRootState) => state.user.userInfo.age);

  const dispatch = useDispatch();

  return (
    <View className="index">
      <Button className="btn-age" onClick={() => dispatch(decrAge(5))}>
        -
      </Button>
      <Text>年龄：{age}</Text>
      <Button className="btn-age" onClick={() => dispatch(incrAge(10))}>
        +
      </Button>
      <Button className="btn-age" onClick={() => dispatch(asynIncrAge(100))}>
        等1秒再加
      </Button>
    </View>
  );
}
