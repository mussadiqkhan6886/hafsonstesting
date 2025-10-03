import NotFound from '@/components/not-found'
import { properties } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'

export const generateStaticParams = () => {
  return properties.filter(item => item.type === "letting").map(item => ({
    id: String(item.id)
  }))
}



const Lettings = async ({params}: {params: Promise<{id: string}>}) => {

     const {id} = await params
     const data = properties.find(item => String(item.id) === id)
 
 
   if(!data) return <NotFound />

  return (
    <main className='pt-25'>
      <h1 className={`${instrumentSerif.className} text-[44px] sm:text-6xl mb-5 text-center`}>{data.address}</h1>
      <section className='flex flex-col md:flex-row'>
        <Image fetchPriority='high' priority className= 'w-full md:w-[50%] object-cover object-bottom' src={data.images[0]} alt='image' width={500} height={500} />
        <Image fetchPriority='high' priority className= 'w-full md:w-[50%] object-cover object-bottom' src={data.images[1]} alt='image' width={500} height={500} />
      </section>
      <div className='flex flex-col items-center md:flex-row justify-between py-10 px-5 md:px-20'>
        <div>
          <section className='flex flex-col gap-3'>
            <h2 className={`${instrumentSerif.className} text-4xl sm:text-5xl `}>House for {data.type === 'buying' ? "Sale" : "Letting"}</h2>
            <h3 className='font-medium text-xl'>{data.price === 0 ? "POA" : "$" + data.price}</h3>
            <p className='text-gray-600'>{data.address}</p>
            <p>{data.size}</p>
            <p>{data.description}</p>
          </section>
          <section className='flex justify-start gap-5 py-5 mb-10'>
            {data.images.map((item, i) => (
              <Image key={i} src={item} alt='item' width={100} height={100} />
            ))}
          </section>
      </div>
      <aside>
          <div className='flex flex-col gap-4 min-w-[300px] p-5 shadow'>
            <h3 className={`${instrumentSerif.className} text-5xl text-center`}>Hafsons</h3>
            <button className='bg-main text-font font-semibold py-2 cursor-pointer '>BOOK A VIEWING</button>
            <button className='bg-main text-font font-semibold py-2 cursor-pointer '>CALL 0208 679 9353</button>
            <button className='border border-main text-font py-2 cursor-pointer '>REQUEST A CALLBACK</button>
          </div>
      </aside>
      </div>
    </main>
  )
}

export default Lettings
