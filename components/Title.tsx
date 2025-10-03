import { instrumentSerif } from '@/fonts/font'
import React from 'react'

const Title = ({content}: {content: string}) => {
  return (
    <h3 className={`${instrumentSerif.className} text-center text-3xl font-bold text-slate-900 sm:text-4xl`}>
      {content}
    </h3>
  )
}

export default Title
