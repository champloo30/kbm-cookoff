import CarouselSlider from "@/components/carouselSlider";
import Info from "@/components/info";
import Form from "@/components/form";

export default function Home() {
  return (
    <div className="relative">
      <CarouselSlider />
      <header className='h-96 sm:h-screen w-screen px-4 absolute top-0 left-0 flex flex-col justify-center items-center gap-4 sm:gap-8'>
        <h2 className="text-base sm:text-3xl text-center">Kingdom Builders Ministries presents...</h2>
        <h1 className="text-2xl sm:text-6xl text-center uppercase">The 1<sup className="text-sm sm:text-4xl">st</sup> Annual Men&apos;s BBQ Cook Off</h1>
      </header>
      <main className="w-screen px-4 sm:px-16 py-8">
        <Info />
      </main>
      <Form />
    </div>
  )
}
