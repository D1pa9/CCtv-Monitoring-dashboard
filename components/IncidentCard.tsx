
import { Incident } from './IncidentList'

export default function IncidentCard({
  incident,
  onResolve,
  onSelect,
}: {
  incident: Incident
  onResolve: (id: string) => void
  onSelect: (incident: Incident) => void
}) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Gun Threat':
        return 'bg-red-500'
      case 'Unauthorized Access':
        return 'bg-yellow-500'
      case 'Face Recognised':
        return 'bg-blue-500'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div
      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 cursor-pointer animate-fade-in"
      onClick={() => onSelect(incident)}
    >
      <img
        src={incident.thumbnailUrl}
        alt="thumbnail"
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${getTypeColor(incident.type)}`}
            title={incident.type}
          ></span>
          <span className="font-semibold text-base">{incident.type}</span>
        </div>
        <span className="text-sm text-gray-500">{incident.camera.location}</span>
        <span className="text-sm text-gray-500">
          {new Date(incident.tsStart).toLocaleString()} -{' '}
          {new Date(incident.tsEnd).toLocaleTimeString()}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation() // prevent triggering onSelect when clicking button
          onResolve(incident.id)
        }}
        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md"
      >
        Resolve
      </button>
    </div>
  )
}
