import React from 'react'
import {ProjectForm} from '@/components/form'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex justify-center '>
        <div className='border border-solid border-black p-10 mt-5'>
        <ProjectForm/>
        </div>
       
    </div>
  )
}