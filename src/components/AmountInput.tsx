import React from 'react'
import Input, { InputProps } from './Input'

const AmountInput = (props: InputProps) => {
  return (
    <div className='flex items-center bg-blue-950 border border-white/10 rounded-lg overflow-hidden'>
        <Input
        placeholder="Amount"
        className=' border-0 w-28 pl-4 bg-transparent text-2xl'
        value={props.value}
        onChange={props.onChange}
      />
      <span className='text-white/50 px-4 '>USD</span>
    </div>
  )
}

export default AmountInput