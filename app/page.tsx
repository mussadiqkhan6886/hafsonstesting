import SearchProperty from "@/components/SearchProperty";
import Valuation from "@/components/Valuation";
import { instrumentSerif } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Title from "@/components/Title";
import ContactUs from "@/components/ContactUs";
import Service from "@/components/Service";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <main>
      <section className="h-dvh ">
        <h1 className={`text-font w-full md:w-[80%] absolute text-[36px] sm:text-[40px] md:text-[50px] bg-main left-0  md:left-22 lg:bottom-8 bottom-0 text-center xl:left-35 ${instrumentSerif.className}`}>&apos;&apos;Your Real Estate Partner to help you sell, rent, buy and let.&apos;&apos;</h1>
        <Image priority fetchPriority="high" src={"/main.webp"} width={1000} height={1000} alt="main hero image" className="w-full h-[90%]  object-center object-cover " />
      </section>
      <SearchProperty />
      <Feature />
      <section className="relative h-screen">
        <Image src={"/main2.webp"} alt="main" width={1000} height={1000} className="w-full h-full object-cover object-center" />
        <div className="bg-main left-20 top-10 md:top-20 absolute text-center px-2 md:px-10 py-5 w-[50%] shadow-lg shadow-black/40 ">
          <h4 className={`text-3xl md:text-4xl mb-2 ${instrumentSerif.className}`}>Request Your Free Valuation</h4>
          <p className="md:text-lg text-sm font-thin ">Our local experts will provide a free, no-obligation property valuation.</p>
          <Link href={"/valuation"} className="text-font underline mt-2">Read More about valuation</Link>
        </div>
        <div className="bg-main lg:right-0 bottom-0 md:right-20 md:bottom-20 absolute text-center px-10 py-5 w-full md:w-[50%] shadow-lg shadow-black/40 ">
          <p className={`${instrumentSerif.className} text-font text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>50 years Experience, Business built on trust and integrity. Customized plans to fit your needs, Experts in local and international property.</p>
        </div>
      </section>
      <section className="relative min-h-screen bg-gradient-to-br from-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Title content="How can we Help You?" />
          <Service />
            <WhyUs />
        </div>
      </section>
      <section  className='h-full py-7 relative px-10 bg-white'>
        <Title content='Kind Words from our Clients' />
        <Testimonials />
      </section>
      <ContactUs />
      <Valuation />
    </main>
  );
}
