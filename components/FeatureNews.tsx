import React from 'react'


export default function FeatureNews () {
  return (
    <div className='mb-12 '>
      <div className='text-center mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Latest new and blogs</h2>
        <p className='w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mx-auto w-5/6'>

        <div className='w-full  mb-6'>
          <img src='/img/home-page/cover-1.jpeg' className='w-full mb-4' />
          <h3 className='mb-4 font-semibold' >Event</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.  Aliquam efficitur euismod ultricies. Nulla pulvinar sagittis eleifend. </p>
          <button className='w-full rounded border-2 bg-[#002CC4] text-white px-12 py-2  '>Read more</button>
        </div>
        <div className='w-full '>
          <img src='/img/home-page/cover-2.jpeg' className='w-full lg:w-[335px] mb-4' />
          <h3 className='mb-4 font-semibold' >Blog title</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.  Aliquam efficitur euismod ultricies. Nulla pulvinar sagittis eleifend. </p>
          <button className='w-full rounded border-2 bg-[#002CC4] text-white px-12 py-2  '>Read more</button>
        </div>
        <div className='w-full '>
          <img src='/img/home-page/cover-1.jpeg' className='w-full lg:w-[335px] mb-4' />
          <h3 className='mb-4 font-semibold' >News</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.  Aliquam efficitur euismod ultricies. Nulla pulvinar sagittis eleifend. </p>
          <button className='w-full rounded border-2 bg-[#002CC4] text-white px-12 py-2  '>Read more</button>
        </div>
        <div className='w-full '>
          <img src='/img/home-page/cover-2.jpeg' className='w-full lg:w-[335px] mb-4' />
          <h3 className='mb-4 font-semibold' >Blog title</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.  Aliquam efficitur euismod ultricies. Nulla pulvinar sagittis eleifend. </p>
          <button className='w-full rounded border-2 bg-[#002CC4] text-white px-12 py-2  '>Read more</button>
        </div>
      </div>

    </div>
  )
}