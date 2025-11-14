import React, {useEffect, useState} from 'react'
import AlertCard from '../components/AlertCard'
import { getAlerts } from '../utils/api'

export default function Alerts(){
  const [alerts, setAlerts] = useState([])
  useEffect(()=>{ getAlerts().then(r=> setAlerts(r.data || r)).catch(()=> setAlerts([])) },[])
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-semibold'>Alerts</h2>
      <div className='grid gap-4'>
        {alerts.length? alerts.map((a,i)=> <AlertCard key={i} {...a} />) : <div className='text-gray-500'>No active alerts</div>}
      </div>
    </div>
  )
}
