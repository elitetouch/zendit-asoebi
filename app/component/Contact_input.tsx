import React from 'react'
import { Input, Text, Box } from '@chakra-ui/react'

type contactInputProps={
    label:string,
    changes:(React.ChangeEventHandler<HTMLInputElement>),
    names:string,
    values: string;
}

function Contact_input({label,changes,names,values}: contactInputProps) {
  return (
    <div className=' w-full'>
        <Box borderBottom="1px" borderBottomColor="#031966" className="w-full">
  <Text className="text-[#FE9534] text-[18px] pb-[10px]">{label}</Text>
  <Input
    border="none"
    _focus={{ border: 'none', boxShadow: 'none' }} // disables focus border and shadow
    _hover={{ border: 'none' }}                    // disables hover border
    onChange={changes}
    value={values}
    name={names}
  />
</Box>
    </div>
  )
}

export default Contact_input