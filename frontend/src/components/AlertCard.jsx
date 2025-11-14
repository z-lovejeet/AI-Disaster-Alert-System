import React from 'react'

export default function AlertCard({type='Flood', level='High', time='Now', details=''}){
  const color = level === 'High' ? 'bg-red-100 border-red-300' : (level === 'Medium' ? 'bg-yellow-100 border-yellow-300' : 'bg-green-100 border-green-300')
  return (
    <div className={'p-4 rounded-lg border '+color}>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='text-lg font-semibold'>{type} <span className='text-sm font-medium text-gray-500'>· {time}</span></h3>
          <p className='text-sm text-gray-600 mt-1'>{details}</p>
        </div>
        <div className='text-right'>
          <div className='text-sm font-bold'>{level}</div>
        </div>
      </div>
    </div>
  )
}
