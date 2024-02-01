import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  
  const bilola = 'Gerar HTML'

  return (
    <>
    <div className='py-2 px-3 m-3 flex'>
      <h1 className='text-gray-300 text-4xl font-semibold'> Clique Abaixo para<br/> gerar seu template </h1>
    </div>
    <Button prop={bilola} />
    </>
  )
}

export default App
