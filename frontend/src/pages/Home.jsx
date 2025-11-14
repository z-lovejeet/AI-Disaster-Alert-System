import React, {useState, useEffect} from 'react'
import MapView from '../components/MapView'
import RiskMeter from '../components/RiskMeter'
import AlertCard from '../components/AlertCard'
import { getAlerts } from '../utils/api'

export default function Home(){
  const [alerts, setAlerts] = useState([])
  useEffect(()=>{
    // fetch alerts (mocked if backend not available)
    getAlerts().then(r=> setAlerts(r.data || r)).catch(()=> setAlerts([
      {type:'Flood', level:'High', time:'2 min ago', details:'River overflow near town A', position:[20.3,78.9]},
      {type:'Heatwave', level:'Medium', time:'1 hour ago', details:'High temperature warning', position:[19.8,77.7]}
    ]))
  },[])

  const markers = alerts.map(a => ({position: a.position || [20.5937,78.9629], title: a.type, desc: a.details}))

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-2 space-y-6'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-3'>Live Disaster Map</h2>
          <MapView markers={markers} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {alerts.map((a,i)=> <AlertCard key={i} {...a} />)}
        </div>
      </div>

      <aside className='space-y-4'>
        <RiskMeter score={55} />
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h4 className='text-lg font-semibold'>Weather Snapshot</h4>
          <div className='mt-3 text-sm text-gray-600'>Sunny · 32°C · Humidity 45%</div>
        </div>
      </aside>
    </div>
  )
}
