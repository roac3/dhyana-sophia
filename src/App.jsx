import { useState } from 'react'
import './styles/common.less'
import { Header } from './components/layout/Header'
import { About } from './components/pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <About/>
    </>
  )
}

export default App
