'use client'
import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


type providerType={
    children:ReactNode
}

function Provider({children}:providerType) {
   
  return (
   
         <ChakraProvider>
          {/* <NavBar /> */}
           {children}
         </ChakraProvider>

  )
}

export default Provider