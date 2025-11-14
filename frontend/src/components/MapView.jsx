import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapView({center=[20.5937,78.9629], zoom=5, markers=[]}){
  return (
    <div className='rounded-lg overflow-hidden shadow-md'>
      <MapContainer center={center} zoom={zoom} className='w-full' scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markers.map((m, i)=> (
          <Marker key={i} position={m.position}>
            <Popup>
              <div className='text-sm'>
                <strong>{m.title}</strong><br/>
                {m.desc}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
