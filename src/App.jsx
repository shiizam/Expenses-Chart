import React from 'react'

import Balance from './components/balance/Balance'
import { Expenses } from './components/expenses/Expenses'
import './index.css'



function App() {

  return (
    <main className="App">
      <Balance/>
      <Expenses/>
    </main>
  )
}

export default App
