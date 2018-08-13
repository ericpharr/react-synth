import React from 'react';
import MonoSynth from './MonoSynth'
import { Provider } from 'mobx-react'
import RootStore from './RootStore'

const store = RootStore.create({})

const App = () => {
  return (
    <Provider store={store}> 
      <MonoSynth />
    </Provider>
  )
}

export default App;
