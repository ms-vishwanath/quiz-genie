"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function CTAButtton({route}:{route:string}) {
    const router =useRouter()
  return (
    <div>
         <Button onClick={()=>{
            router.push(route)
         }} >
        Create your first quiz using AI
      </Button>
    </div>
  )
}
