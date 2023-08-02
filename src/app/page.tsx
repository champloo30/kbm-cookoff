import CarouselSlider from "@/components/carouselSlider";
import Info from "@/components/info";
import Form from "@/components/form";

export default function Home() {
  return (
    <div className="relative">
      <CarouselSlider />
      <header className='h-screen w-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-8'>
        <h2 className="text-3xl">Kingdom Builders Ministries presents...</h2>
        <h1 className="text-6xl uppercase">The 1<sup className="text-4xl">st</sup> Annual BBQ Cook Off</h1>
      </header>
      <main className="w-screen px-16 py-8">
        <Info />
      </main>
      <Form />
    </div>
  )
}
