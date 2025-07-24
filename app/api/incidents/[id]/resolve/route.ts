import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  const updated = await prisma.incident.update({
    where: { id: params.id },
    data: { resolved: true },
  })
  return NextResponse.json(updated)
}
