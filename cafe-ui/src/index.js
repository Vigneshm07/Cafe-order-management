import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { startCheckedId, startGetIdData, startGetOrder, startSearchOrder } from './actions/orderAction'

const store = configureStore()
console.log(store)

console.log('state' , store.getState())

store.subscribe(() => {
  console.log('state update' , store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </Provider>
)
