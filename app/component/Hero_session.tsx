'use client'
import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import asoebicover from '../../public/asoebicover.svg'
import { Georama } from 'next/font/google'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import guests from '../../public/guests.svg'
import fstore from '../../public/fstore.svg'
const georama = Georama({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-georama",
});
type handleScroll={
  handleScroll: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function Hero_session({handleScroll}:handleScroll) {
      useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // animation only happens once
    });
  }, []);
  return (
    <div>
        <Box className=' grid lg:grid-cols-2 mt-[70px] lg:mt-0'>
            <Box className=' grid h-full items-center justify-end  '>
                <Box className=' w-10/12 lg:w-9/12 m-auto'>
                 <Box >
                    <div data-aos="fade-left">
                    <Text   className='text-[#FE9534] italic pt-[20px] '>Reliable and efficient</Text>

                    </div>
                    <Text className={`${georama.className} font-georama lg:text-[40px] font-bold text-[30px]  text-[#031966] lg:mt-0 pt-[10px]`}>Making Asoebi distribution Flawless.</Text>
                 </Box>
                  <Box className=' mt-[10px] text-[18px] lg:text-[18px]'> 
                    
                    <Text className=' lg:pt-[30px] pt-[20px] text-[#031966]'>We specialize in Asoebi distribution, delivering your fabrics to your guests’ doorstep, on time. Weddings, parties, or cultural events, we handle the logistics, so you can dazzle stress-free. Let’s make your moment unforgettable!</Text>
                    <Box className=' lg:flex grid gap-y-[20px] w-10/12 m-auto lg:w-full  lg:items-center gap-x-[20px] pt-[40px]'>
                          <Box>
                            <Button onClick={handleScroll} backgroundColor={'#FE9534'} height={'50px'} roundedLeft={'full'} roundedRight={'full'} className='  rounded-l-full rounded-r-full w-full '>
                                <Text className='text-white lg:pl-[20px] pl-[10px]  pr-[10px] lg:pr-[20px] text-[18px] lg:text-[18px]'>Get started</Text>
                                </Button>
                        </Box>
                        <Box >
                          <Button 
  as="a" 
  href="https://docs.google.com/spreadsheets/d/1It3RrduLglOXYyGdjutD4o6fJD4d40hK/export?format=xlsx" 
  target="_blank" 
  rel="noopener noreferrer"
  border={'1px'} 
  height={'50px'} 
  borderColor={'#FE9534'} 
  backgroundColor={'transparent'} 
  roundedLeft={'full'} 
  roundedRight={'full'} 
  className='w-full'
>
  <Box className='flex items-center gap-x-[5px] lg:gap-x-[10px]'>
    <Box>
      <Text className='text-[#FE9534] text-[18px] lg:text-[18px]'>Download format</Text>
    </Box>
    <Box>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7071 11.7071L10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929C5.68342 9.90237 6.31658 9.90237 6.70711 10.2929L9 12.5858V1C9 0.447715 9.44772 0 10 0C10.5523 0 11 0.447715 11 1V12.5858L13.2929 10.2929C13.6834 9.90237 14.3166 9.90237 14.7071 10.2929C15.0976 10.6834 15.0976 11.3166 14.7071 11.7071Z" fill="#FE9534"/>
        <path d="M2 15.5C2 14.9477 1.55228 14.5 1 14.5C0.447715 14.5 0 14.9477 0 15.5V17C0 19.2091 1.79086 21 4 21H16C18.2091 21 20 19.2091 20 17V15.5C20 14.9477 19.5523 14.5 19 14.5C18.4477 14.5 18 14.9477 18 15.5V17C18 18.1046 17.1046 19 16 19H4C2.89543 19 2 18.1046 2 17V15.5Z" fill="#FE9534"/>
      </svg>
    </Box>
  </Box>
</Button>

                        </Box>
                      
                    </Box>
                  </Box>
                   <Box data-aos="fade-up" className=' pt-[50px]'>
                    <Text className={`${georama.className} text-[25px] font-bold text-[#031966] text-center lg:text-left`}>Our partners</Text>
                    <Box className=' flex gap-y-[10px] text-center lg:text-left lg:justify-normal justify-center items-center lg:gap-x-[20px] gap-x-[10px] text-[18px] lg:text-[18px] italic mt-[20px] text-[#031966]'>
                    {/* <Text className= {`font-semibold `}>Guest and Hosts</Text> */}
                         <Image alt='' src={guests} />
                          <Image alt='' src={fstore} />
                          {/* <Text>Event Padi</Text>
                           <Text>Adeola Alaga</Text>
                            <Text>Judams Fabrics</Text> */}
                    </Box>
                   </Box>

                </Box>
            </Box>
            <Box>
            <Box  data-aos="zoom-in" className=' lg:w-9/12 w-10/12 m-auto mt-[20px] lg:mt-0'>
                <Box className=' relative w-fit'>
                    <Box className=' lg:absolute hidden lg:grid top-0 right-0'>
                            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="37" cy="37" r="37" fill="#FE9534"/>
</svg>
                    </Box>
                    <Image src={asoebicover} alt='' />
                </Box>
            </Box>

            </Box>
        </Box>
    </div>
  )
}

export default Hero_session