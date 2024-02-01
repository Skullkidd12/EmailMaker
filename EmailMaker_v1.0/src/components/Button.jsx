import React from 'react'
import callpug from '../callpug.cjs'

function Button({prop})
 {
  function evento(){
    callpug()
  }
  return (
    <button onClick={evento} className='px-4 py-3 bg-blue-600 rounded-lg text-2xl font-semibold shadow-sm cursor-pointer hover:bg-indigo-500 hover:scale-105 transition ease-in-out'>
      {prop}
    </button>
  )
}

export default Button