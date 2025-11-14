import React from 'react'

export default function RiskMeter({score=42}){
  const color = score>70 ? 'bg-red-500' : (score>40 ? 'bg-yellow-500' : 'bg-green-500')
  return (
    <div className='p-4 rounded-lg shadow-sm bg-white'>
      <h4 className='text-sm font-medium text-gray-600'>Overall Risk</h4>
      <div className='mt-3 flex items-center space-x-4'>
        <div className='w-48 h-6 bg-gray-200 rounded-full overflow-hidden'>
          <div className={'h-full '+color} style={{width: `${score}%`}} />
        </div>
        <div className='text-xl font-bold'>{score}%</div>
      </div>
    </div>
  )
}
