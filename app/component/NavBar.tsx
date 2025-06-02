'use client'
import Cover from '../../public/Cover.svg'
import React from 'react'
import Zeditlogo from '../../public/Zeditlogo.svg'
import Image from 'next/image'
import { IconButton } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useRef } from 'react'
type handleScroll={
  handleScroll: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function NavBar({handleScroll}:handleScroll) {
  const contactNumber = '09039973446';

const handleClick = () => {
  window.open(`https://wa.me/${contactNumber}`, '_blank');
};
  return (
    <Box  className=' h-[86px] hidden lg:grid items-center mb-[20px]'>
      <Box borderBottom={'1px'} borderBottomColor={'gray.200'}  className='w-9/12 m-auto pb-[20px] pt-[20px]'>
        <Box className=' flex items-center justify-between '>
            <Box>
                <Image alt='' src={Zeditlogo} />
            </Box>
            <Box className=' flex items-center lg:gap-x-[20px] gap-x-[5px]'>
                <IconButton
                backgroundColor={'transparent'}
  icon={<Box className=' flex items-center gap-x-[5px] pr-[15px] pl-[15px]'>
<Image alt='' src={Cover} /><Box>
    <Text className=' text-[#FE9534] text-[18px]'>Contact us</Text>
</Box>
  </Box>} // Replace with a real icon like <AddIcon />
  onClick={
    handleClick
  }
  aria-label="Placeholder icon button"
/>
<Button  onClick={
    handleScroll
  }
   backgroundColor={'#FE9534'}>
    <Text className=' text-white text-[18px]'>Get started</Text>
</Button>
            </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default NavBar