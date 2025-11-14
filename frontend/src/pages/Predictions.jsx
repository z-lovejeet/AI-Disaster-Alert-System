import React, {useState} from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../utils/api'

export default function Predictions(){
  const [form, setForm] = useState({temperature:'', humidity:'', rainfall:''})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    // simple validation
    if(!form.temperature || !form.humidity){
      alert('Please enter temperature and humidity')
      return
    }
    setLoading(true)
    try{
      const res = await axios.post(`${API_BASE_URL}/predict`, form)
      setResult(res.data)
    }catch(err){
      console.error(err)
      setResult({risk:'Unknown', confidence:0})
    }finally{ setLoading(false) }
  }

  return (
    <div className='max-w-2xl bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Prediction Module</h2>
      <form onSubmit={onSubmit} className='space-y-3'>
        <div>
          <label className='block text-sm text-gray-700'>Temperature (°C)</label>
          <input value={form.temperature} onChange={e=> setForm({...form, temperature:e.target.value})} className='mt-1 w-full border rounded-md p-2' />
        </div>
        <div>
          <label className='block text-sm text-gray-700'>Humidity (%)</label>
          <input value={form.humidity} onChange={e=> setForm({...form, humidity:e.target.value})} className='mt-1 w-full border rounded-md p-2' />
        </div>
        <div>
          <label className='block text-sm text-gray-700'>Rainfall (mm)</label>
          <input value={form.rainfall} onChange={e=> setForm({...form, rainfall:e.target.value})} className='mt-1 w-full border rounded-md p-2' />
        </div>

        <div className='flex items-center space-x-3'>
          <button className='px-4 py-2 bg-sea text-white rounded-md' disabled={loading}>{loading? 'Predicting...' : 'Predict'}</button>
          {result && <div className='text-sm'>Risk: <strong>{result.risk}</strong> · Confidence: {result.confidence}</div>}
        </div>
      </form>
    </div>
  )
}
