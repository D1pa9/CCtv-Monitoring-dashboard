

'use client'

import { Incident } from './IncidentList'

export default function IncidentPlayer({
  selectedIncident,
}: {
  selectedIncident: Incident | null
}) {
  return (
    <div className="w-full h-full p-4 space-y-4 text-white">
      {/* Media Display */}
      <div className="bg-black rounded-xl overflow-hidden shadow-lg w-full h-[500px] flex items-center justify-center">
        {selectedIncident ? (
          <img
            src={selectedIncident.thumbnailUrl}
            alt="Selected Incident"
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <video controls className="w-full h-full object-cover">
            <source src="/thumbnails/videos/camera1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Camera Thumbnail Strip */}
      <div className="flex gap-4">
        <img
          src="/thumbnails/camera1.png"
          alt="Camera 1"
          className="w-36 h-24 object-cover rounded-md border-2 border-yellow-500"
        />
        <img
          src="/thumbnails/camera2.png"
          alt="Camera 2"
          className="w-36 h-24 object-cover rounded-md border"
        />
        <img
          src="/thumbnails/camera3.png"
          alt="Camera 3"
          className="w-36 h-24 object-cover rounded-md border"
        />
      </div>

      {/* Incident Details Section */}
      {selectedIncident && (
        <div className="bg-gray-900 text-white rounded-xl p-4 shadow-md space-y-1">
          <h3 className="text-xl font-semibold">Incident Details</h3>
          <p>
            <span className="font-medium">Type:</span>{' '}
            {selectedIncident.type}
          </p>
          <p>
            <span className="font-medium">Location:</span>{' '}
            {selectedIncident.camera.location}
          </p>
          <p>
            <span className="font-medium">Time:</span>{' '}
            {new Date(selectedIncident.tsStart).toLocaleString()} -{' '}
            {new Date(selectedIncident.tsEnd).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  )
}
