'use client'

import React from 'react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import bbq from '../assets/bbq-unsplash.jpg'
import Link from 'next/link'

export default function Info() {
  return (
    <div className='sm:text-lg flex flex-col gap-8 sm:gap-16'>
      <p className='sm:text-xl'>Kingdom Builders Ministries would like to invite you to the 1<sup>st</sup> Annual BBQ Cook Off. Where we will crown the first GRAND CHAMPION of the pit!</p>
      <div className='flex justify-evenly'>
        <div className='flex flex-col gap-8'>
          <ul className='sm:text-xl space-y-2'>
            <li><span className='text-gray-400'>Location:</span> <Link href='https://goo.gl/maps/X2Y7LAHeH1bLiWy6A'>1365 W Orange St Jesup, GA 31545</Link></li>
            <li><span className='text-gray-400'>Date:</span> August 19<sup>th</sup>, 2023</li>
            <li><span className='text-gray-400'>Sign Up Deadline:</span> August 10<sup>th</sup>, 2023</li>
            <li><span className='text-gray-400'>Entry Fee:</span> $100</li>
          </ul>
          <div className='bg-gray-500 py-8 flex justify-center'>
            <div className='w-3/4 flex flex-col items-center text-center gap-3 sm:gap-6'>
              <h2 className='text-2xl sm:text-4xl'>Prizes for the winners:</h2>
              <p>In each of the three (3) categories: chicken, ribs, and pork</p>
              <ul>
                <li>3rd Place: A Ribbon and $75</li>
                <li>2nd Place: A Trophy and $100</li>
                <li>1st Place: A Trophy and $200</li>
              </ul>
              <Separator />
              <h3 className='text-lg sm:text-2xl'>For the two overall top scorers:</h3>
              <p><span className='text-black font-semibold'>Reserve Grand Champion:</span> A Trohpy and $250</p>
              <p><span className='text-black font-semibold'>Grand Champion:</span> A Trohpy and $500</p>
            </div>
          </div>
        </div>
        <div className='w-[25rem] hidden sm:block'>
          <Image 
            src={bbq}
            height={500}
            width={500}
            alt='Man grilling food.'
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl sm:text-3xl underline uppercase'>Rules And Regulations</h2>
        <ol>
          <li>1. Each team shall consist of a chief cook (Pit Master) and up to two (2) assistants.</li>
          <li>2. Each team is assigned acooking space. Pits, cookers, props, trailers, vehicles, tents, shall not exceed the boundaries of team&apos;s assigned cooking space. (Showdown space is 20x20.)</li>
          <li>3. Teams shall provide all needed equipment, supplies, electricity, 5 lbs. fire extinguisher.</li>
          <li>4. Cook fires shall be of wood, wood pellets, charcoal, or gas.</li>
          <li>5. All competition meats shall be inspected by the Official Meat Inspector during the times established by the contest organizer. <span className='text-red-500'>(Meat inspections shall be done soon after check in. DO NOT do anything with you meat util it is inspected. You will receive a ribbon or card to display at your cooking station after inspection.)</span></li>
          <li>6. All meat must be purchased fresh and sealed. Do not apply ANY rubs, marinades, sauce, etc. until after inspection is completed.</li>
          <li>7. The three Meat Categories:
            <ul className='indent-5'>
              <li>
                a. <span className='font-bold'>Chicken</span>
              </li>
              <li>
                b. <span className='font-bold'>Pork Ribs</span> - Ribs shall include the bone. Country style Ribs are prohibited.
              </li>
              <li>
                a. <span className='font-bold'>Pork</span> - Pork is defined as Boston Butt, Boston Roast, Picnic and/or Whole Shoulder, weighing a minimum of 4 lbs.
              </li>
            </ul>
          </li>
          <li>8. Judging starts at noon. The three categories will be judged in the following order:
            <ul className='indent-5'>
              <li>
                a. <span className='font-bold'>Chicken</span>: 12pm (noon)
              </li>
              <li>
                b. <span className='font-bold'>Pork Ribs</span>: 12:30pm
              </li>
              <li>
                a. <span className='font-bold'>Pork</span>: 1pm
              </li>
            </ul>
          </li>
          <li>9. Sauce is optional.</li>
          <li>10. Each contestant must submit at least six (6) portions of meat in an approved contianer. <span className='text-red-500'>(Teams will be provided with three (3) 9x9 regulation (Turn in Trays).)</span></li>
          <li>11. There will be no refund of entry fees for any reason except at the election of the contest organizer.</li>
          <li>12. <span className='text-red-500'>All foods remaining after turn in, will be made accessible to the public for further taste testing.</span></li>
        </ol>
      </div>
    </div>
  )
}
