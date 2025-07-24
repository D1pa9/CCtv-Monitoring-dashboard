import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const incidents = await prisma.incident.findMany({
    where: { resolved: false },
    orderBy: { tsStart: 'desc' },
    include: { camera: true },
  })
  return NextResponse.json(incidents)
}





