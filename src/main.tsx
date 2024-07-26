import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
//import { store } from './store/store.ts'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { posts } from './Rtkstore/api.ts'
import { store } from './Rtkstore/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    {/* <ApiProvider api={posts}>
      <App />
    </ApiProvider> */}
  </React.StrictMode>,
)
