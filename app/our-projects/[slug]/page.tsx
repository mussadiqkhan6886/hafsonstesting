import { projects } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'


export const generateStaticParams = () => {
  return projects.map(item => ({
    slug: item.slug,   
  }))
}



const Project = async ({params}: {params: Promise<{slug: string}>}) => {

    
        const {slug} = await params
        const data = projects.find(item => String(item.slug) === slug)
    
      if(!data) return <div>Data Not Found</div>
      

  return (
    <main className='pt-25 pb-10'>
      <h1 className={`${instrumentSerif.className} text-[76px] sm:text-[100px] mb-10 text-center`}>{data.title}</h1>
      <section className='flex flex-col md:flex-row-reverse px-3 gap-10 items-start max-w-5xl mx-auto'>
        <div className='flex gap-5 flex-col pt-10'>
            <h3 className='font-medium'>Location: <span className='text-lg sm:text-xl font-bold'>{data.location}</span></h3>
            <h3 className='font-medium'>Price: <span className='text-lg sm:text-xl font-bold'>{data.price}</span></h3>
            <h3 className='font-medium'>Size: <span className='text-lg sm:text-xl font-bold'>{data.size}</span></h3>
            <div>
                <h3 className='font-bold text-lg'>Description:</h3>
                <p className='max-w-xl'>{data.description}</p>
            </div>
        </div>
         <div>
            <h2 className='mb-4 font-medium text-2xl'>Gallery</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {data.images.map((image, i) => (
                    <Image key={i} src={image} alt='image' width={300} height={300} />
                ))}
            </div>
        </div>
      </section>
    </main>
  )
}

export default Project
