import React from 'react'

type ResultRowProps = {
loading? : boolean
}
const ResultRow = ({loading}:ResultRowProps) => {
  return (
    <div className='relative border border-white/10 min-h-12 rounded-lg 
    bg-gradient-to-f from-purple-500/10 to-blue-500/10 p-4 my-2 overflow-hidden'>
        <div className='flex gap-4'>
            <div>logo</div>
            <div className='grow'>provider name</div>
            <div className='flex gap-2'>
                <span className='text-xl text-purple-200/80'>0.000</span>
                <span className='tet-xl text-purple-300/50'>BTC</span> 
            </div>
        </div>
        {loading && (
            <div className='inset-0 absolute bg-gradient-to-r from-transparent
            via-blue-700/50 to-transparent skeleton-animation'/>
        )}
    </div>
  )
}

export default ResultRow