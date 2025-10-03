
import { insights } from '@/constants'
import Image from 'next/image'

export const generateStaticParams = () => {
  return insights.map(item => ({
    slug: item.slug,   
  }))
}



const Insight = async ({params}: {params: Promise<{slug: string}>}) => {

         const {slug} = await params
         const data = insights.find(item => String(item.slug) === slug)
     
       if(!data) return <div>Data Not Found</div>

  return (
     <main className="pt-24 pb-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-2 mt-3">{data.title}</h1>
      <p className="text-gray-500 mb-6">{data.date}</p>
      <Image
        src={data.image}
        alt={data.category || data.title}
        width={1000}
        height={600}
        className="w-full h-[400px] object-cover rounded-lg shadow-md mb-6"
      />
      <section className="prose lg:prose-lg max-w-none">
        {data.description}
      </section>
    </main>
  )
}

export default Insight
