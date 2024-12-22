import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';

import './app.scss';

// 导入和注入 redux store
import { Provider } from 'react-redux';
import store from '@/store';

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面，同时注入 redux store
  return <Provider store={store}>{children}</Provider>;
}

export default App;
