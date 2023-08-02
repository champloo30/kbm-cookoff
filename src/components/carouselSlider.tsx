'use client'

import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { items } from '../../public/Items.json'

const CarouselSlider = () => {
  const { responsive } = items
  return (
    <div className='relative h-screen w-screen'>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        transitionTime={1500}
      >
        {responsive.map((item) => (
          <div key={item.id} className='w-screen h-screen opacity-50'>
            <Image 
              src={item.imageUrl}
              fill
              alt={`Slide ${item.id}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSlider