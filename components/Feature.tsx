import React from 'react'
import Title from './Title'
import FeatureProperties from './FeatureProperties'

const Feature = () => {
  return (
    <section className='h-full py-10 bg-white px-20'>
      <Title content='Featured Properties' />
        <FeatureProperties />
    </section>
  )
}

export default Feature
