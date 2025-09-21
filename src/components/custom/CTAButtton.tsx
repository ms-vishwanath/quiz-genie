"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function CTAButtton({route}:{route:string}) {
    const router =useRouter()
  return (
    <div>
         <button className='flex items-center gap-4 border border-primary rounded-xl p-4 shadow-xl' onClick={()=>{
            router.push(route)
         }} >
          <Image alt='glimpse' src="/assets/glimpse.png" width={20} height={20}/>
        Create your first quiz using AI
      </button>
    </div>
  )
}
