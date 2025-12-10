
//two buttons two actions ,we need to dispatch the actions,
// reducer will take those actions,and we need to register reducer with store and
//  give the store to the counter.jsx
import React from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {CounterReducer} from './redux/CounterReducer'
//register reducer with store
const store=configureStore({
  reducer:{
    counter:CounterReducer
  }

});

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter/>

      </Provider>
    </div>
  )
}

export default App
