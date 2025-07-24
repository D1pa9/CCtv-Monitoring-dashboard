
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear previous data
  await prisma.incident.deleteMany()
  await prisma.camera.deleteMany()

  // Create cameras
  const cam1 = await prisma.camera.create({
    data: { name: 'Vault', location: 'Vault Room' },
  })
  const cam2 = await prisma.camera.create({
    data: { name: 'Shop Floor A', location: 'Ground Floor' },
  })
  const cam3 = await prisma.camera.create({
    data: { name: 'Entrance', location: 'Main Gate' },
  })

  // Seed incidents
  await prisma.incident.createMany({
    data: [
      {
        cameraId: cam1.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T10:00:00Z'),
        tsEnd: new Date('2025-07-21T10:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb1.jpg',
        resolved: false,
      },
      {
        cameraId: cam1.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T11:00:00Z'),
        tsEnd: new Date('2025-07-21T11:10:00Z'),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
        resolved: false,
      },
      {
        cameraId: cam2.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-21T12:00:00Z'),
        tsEnd: new Date('2025-07-21T12:02:00Z'),
        thumbnailUrl: '/thumbnails/thumb3.jpg',
        resolved: false,
      },
      {
        cameraId: cam3.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T13:30:00Z'),
        tsEnd: new Date('2025-07-21T13:35:00Z'),
        thumbnailUrl: '/thumbnails/thumb2.jpg',
        resolved: false,
      },
       {
        cameraId: cam1.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T14:00:00Z'),
        tsEnd: new Date('2025-07-21T14:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
        resolved: false,
      },
      {
        cameraId: cam2.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-21T15:00:00Z'),
        tsEnd: new Date('2025-07-21T15:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb3.jpg',
        resolved: false,
      },
      {
        cameraId: cam3.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T16:00:00Z'),
        tsEnd: new Date('2025-07-21T16:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
        resolved: false,
      },
      {
        cameraId: cam1.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T17:00:00Z'),
        tsEnd: new Date('2025-07-21T17:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb4.jpg',
        resolved: false,
      },
      {
        cameraId: cam2.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-21T18:00:00Z'),
        tsEnd: new Date('2025-07-21T18:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb3.jpg',
        resolved: false,
      },
      {
        cameraId: cam3.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T19:00:00Z'),
        tsEnd: new Date('2025-07-21T19:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
        resolved: false,
      },
      {
        cameraId: cam2.id,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T20:00:00Z'),
        tsEnd: new Date('2025-07-21T20:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb4.jpg',
        resolved: false,
      },
      {
        cameraId: cam3.id,
        type: 'Face Recognised',
        tsStart: new Date('2025-07-21T21:00:00Z'),
        tsEnd: new Date('2025-07-21T21:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb3.jpg',
        resolved: false,
      },
      {
        cameraId: cam1.id,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T22:00:00Z'),
        tsEnd: new Date('2025-07-21T22:05:00Z'),
        thumbnailUrl: '/thumbnails/thumb5.jpg',
        resolved: false,
      },
    ],
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
