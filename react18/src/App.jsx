import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import { store } from '@/store';
import Layout from '@/layouts'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Provider>
  );
}

export default memo(App);
