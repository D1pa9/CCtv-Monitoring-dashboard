
'use client'

import { useState } from 'react'
import IncidentPlayer from '@/components/IncidentPlayer'
import IncidentList, { Incident } from '@/components/IncidentList'

export default function Page() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)

  return (
    <main className="flex min-h-screen">
      <div className="w-2/3 p-6 bg-[#0F0F0F]">
        <IncidentPlayer selectedIncident={selectedIncident} />
      </div>
      <div className="w-1/3 bg-gray-100 border-l border-gray-200">
        <IncidentList onSelect={setSelectedIncident} />
      </div>
    </main>
  )
}




