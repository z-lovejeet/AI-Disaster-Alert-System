import React, {useState} from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../utils/api'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.message) return alert('Please fill all fields')
    try{
      await axios.post(`${API_BASE_URL}/feedback`, form)
      setSent(true)
      setForm({name:'', email:'', message:''})
    }catch(err){
      console.error(err)
      alert('Unable to send feedback — backend not available.')
    }
  }

  return (
    <div className='max-w-2xl bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>User Feedback</h2>
      {sent && <div className='p-3 bg-green-50 rounded-md text-green-700'>Thanks — your feedback was sent.</div>}
      <form onSubmit={submit} className='space-y-3 mt-3'>
        <input value={form.name} onChange={e=> setForm({...form, name:e.target.value})} placeholder='Your name' className='w-full p-2 border rounded-md' />
        <input value={form.email} onChange={e=> setForm({...form, email:e.target.value})} placeholder='Your email' className='w-full p-2 border rounded-md' />
        <textarea value={form.message} onChange={e=> setForm({...form, message:e.target.value})} placeholder='Your message' className='w-full p-2 border rounded-md' rows={5} />
        <div className='flex justify-end'>
          <button className='px-4 py-2 bg-primary text-white rounded-md'>Send</button>
        </div>
      </form>
    </div>
  )
}
