import React from 'react'
import Main from './components/MainOne/Main';
import Grade from './components/gradientpart/Grade';
import GlobalContextProvider from './GlobalContext/GlobalContext'


const App = () => {
  return (
    <GlobalContextProvider>
      <Main />
      <Grade />
    </GlobalContextProvider>
  )
}

export default App
