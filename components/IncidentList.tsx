
'use client'

import { useEffect, useState } from 'react'
import IncidentCard from './IncidentCard'

export interface Incident {
  id: string
  type: string
  tsStart: string
  tsEnd: string
  thumbnailUrl: string
  resolved: boolean
  camera: {
    location: string
  }
}

export default function IncidentList({
  onSelect,
}: {
  onSelect: (incident: Incident) => void
}) {
  const [incidents, setIncidents] = useState<Incident[]>([])

  useEffect(() => {
    fetch('/api/incidents')
      .then((res) => res.json())
      .then(setIncidents)
  }, [])

  const handleResolve = async (id: string) => {
    setIncidents((prev) => prev.filter((i) => i.id !== id))
    await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' })
  }

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto p-4 space-y-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-red-600 mb-2">
        🛑 Unresolved Incidents ({incidents.length})
      </h2>

      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
          onResolve={handleResolve}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
