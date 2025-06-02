'use client'
import React from 'react'
import Cover from '../../public/Cover.svg'
import Zeditlogo from '../../public/Zeditlogo.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button,
  Text
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'
type handleScroll={
  handleScroll: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function MobileNav({handleScroll}:handleScroll) {
    const contactNumber = '09039973446';

const handleClick = () => {
  window.open(`https://wa.me/${contactNumber}`, '_blank');
};
  return (
    <Box borderBottom={'1px'} borderBottomColor={'gray.200'} className='lg:hidden '>
       <Menu>
  {({ isOpen }) => (
    <>
      <div className='h-[70px] grid items-center'>
        <Box className='flex items-center justify-between w-11/12 m-auto'>
          <Box>
            <Image alt='' src={Zeditlogo} />
          </Box>
          <Box className='flex items-center lg:gap-x-[20px] gap-x-[5px]'>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={
                isOpen ? (
                  <Box>
                    {/* Cancel icon */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L17 17M17 1L1 17" stroke="#454545" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Box>
                ) : (
                  <Box>
                    {/* Hamburger icon */}
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.90625 1.42822H19.5729M0.90625 7.26156H19.5729M0.90625 13.0949H19.5729" stroke="#454545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                )
              }
              variant='outline'
            />
          </Box>
        </Box>
      </div>

      <MenuList>
        <Box className='lg:flex grid items-center lg:gap-x-[20px] gap-y-[20px] gap-x-[5px] p-[20px]'>
          <IconButton
            backgroundColor={'transparent'}
            icon={
              <Box className='flex items-center gap-x-[10px] pr-[15px] pl-[15px]'>
                <Image alt='' src={Cover} />
                <Box>
                  <Text className='text-[#FE9534] text-[18px]'>Contact us</Text>
                </Box>
              </Box>
            }
            onClick={handleClick}
            aria-label="Contact us"
          />
          <Button onClick={handleScroll} backgroundColor={'#FE9534'}>
            <Text className='text-white text-[18px]'>Get started</Text>
          </Button>
        </Box>
      </MenuList>
    </>
  )}
</Menu>

    </Box>
  )
}

export default MobileNav