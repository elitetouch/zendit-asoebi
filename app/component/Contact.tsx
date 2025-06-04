'use client'
import React, { useState, useEffect } from 'react'
import { Box, Button, Text, IconButton } from '@chakra-ui/react'
import Image from 'next/image';
import Cover from '../../public/Cover.svg'
import Zeditlogo from '../../public/Zeditlogo.svg'

import Contact_input from './Contact_input';
import { useRef } from 'react';
import axios from 'axios';
import Aos from 'aos';
import { useToast } from '@chakra-ui/react';
type SubmitComponentProps = {
  handleSubmission: () => void;
  submitLoader: boolean;
  setContactData: React.Dispatch<React.SetStateAction<any>>;
};

export const SubmitComponent=({handleSubmission, submitLoader,setContactData}: SubmitComponentProps)=>{
  const [fileName, setFileName] = useState<string | null>(null);

  //file uploads//
 const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageClick = () => {
    inputRef.current?.click(); // trigger file input
  };

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'text/csv',
    ];
    const allowedExtensions = ['.xlsx', '.xls', '.csv'];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
      alert('Please upload a valid spreadsheet file (.xlsx, .xls, .csv)');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setPreview(reader.result as string);
      }
    };
    reader.readAsDataURL(file);

    // ✅ Set file name here
    setFileName(file.name);

    setContactData((prev = {}) => ({
      ...prev,
      list: file,
    }));
  }
};



  return(
    <Box className=' lg:pb-[40px]'>
{fileName && (
  <Text fontSize="sm" color="gray.600" className='lg:grid hidden pb-[10px]'>
    Selected file: <strong>{fileName}</strong>
  </Text>
)}
  <Box className=' lg:flex grid items-center lg:gap-x-[20px] gap-y-[20px] lg:w-full w-11/12 m-auto pt-[40px] lg:pt-0'>
                 <Button isLoading={submitLoader} onClick={()=>{handleSubmission(); setFileName('')}} height={50} backgroundColor={'#FE9534'} roundedLeft={'full'} roundedRight={'full'} className='  rounded-l-full rounded-r-full '>
                                                <Text className='text-white '>Submit your request</Text>
                                                </Button>
                                                <Box className=' lg:block grid lg:justify-normal justify-center'>
                 <Button
                  // as="a" href="https://docs.google.com/spreadsheets/d/1It3RrduLglOXYyGdjutD4o6fJD4d40hK/edit?usp=sharing&ouid=114772245121236447404&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"
                 onClick={handleImageClick} 
                 
                 height={50}  backgroundColor={'transparent'} roundedLeft={'full'} roundedRight={'full'}>
                                                <Box className=' flex items-center gap-x-[10px]'>
                                                    <Box>
                                                        <Text className=' text-[#031966] text-[18px]'>Upload your list</Text>
                                                    </Box>
                                                    <Box>
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7071 0.792893C10.3166 0.402369 9.68342 0.402369 9.29289 0.792893L5.29289 4.79289C4.90237 5.18342 4.90237 5.81658 5.29289 6.20711C5.68342 6.59763 6.31658 6.59763 6.70711 6.20711L9 3.91421V15.5C9 16.0523 9.44772 16.5 10 16.5C10.5523 16.5 11 16.0523 11 15.5V3.91421L13.2929 6.20711C13.6834 6.59763 14.3166 6.59763 14.7071 6.20711C15.0976 5.81658 15.0976 5.18342 14.7071 4.79289L10.7071 0.792893Z" fill="#031966"/>
<path d="M2 16C2 15.4477 1.55228 15 1 15C0.447715 15 0 15.4477 0 16V17.5C0 19.7091 1.79086 21.5 4 21.5H16C18.2091 21.5 20 19.7091 20 17.5V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17.5C18 18.6046 17.1046 19.5 16 19.5H4C2.89543 19.5 2 18.6046 2 17.5V16Z" fill="#031966"/>
</svg>

                                                    </Box>
<input
  ref={inputRef}
  type="file"
  accept=".xlsx, .xls, .csv"
  onChange={handleFileChange}
  style={{ display: 'none' }}
/>

                                                </Box>
                                            </Button>
{fileName && (
  <Text fontSize="sm" mt={2} color="gray.600" className='lg:hidden'>
    Selected file: <strong>{fileName}</strong>
  </Text>
)}
                                                </Box>
                                              <Button 
  as="a"
  href="https://docs.google.com/spreadsheets/d/1It3RrduLglOXYyGdjutD4o6fJD4d40hK/export?format=xlsx"
  target="_blank"
  rel="noopener noreferrer"
  height={50}
  backgroundColor={'transparent'}
  roundedLeft={'full'}
  roundedRight={'full'}
>
  <Box className='flex items-center gap-x-[10px]'>
    <Box>
      <Text className='text-[#FE9534]'>Download format</Text>
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

  )
}

type MyRefObject = {
  ref: React.Ref<HTMLDivElement>;
};
function Contact({ref}:MyRefObject) {
   useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // animation only happens once
    });
  }, []);
const toast = useToast()
 const contactNumber = '09039973446';

const handleClick = () => {
  window.open(`https://wa.me/${contactNumber}`, '_blank');

  
};
    const [contactData, setContactData]= useState({
       client_name:'',
        phone:'',
        email:'',
        list:''
    })
type ContactData = {
  client_name: string;
  email: string;
  phone: string;
  list: File | Blob | string | null;
};
type Errors = {
  [key: string]: string;
};
const [errors, setErrors] = useState<Errors>({});

const Validation = (contactData: ContactData): { valid: boolean; errors: Errors } => {
  const errors: Errors = {};

  const requiredFields: (keyof ContactData)[] = ['client_name', 'email', 'phone', 'list'];

  requiredFields.forEach((field) => {
    const value = contactData[field];

    if (
      value === null ||                               // explicitly null
      (typeof value === 'string' && value.trim() === '') // empty string
    ) {
      errors[field] = `Input ${field.replace(/_/g, ' ')}`;
    }
  });

  return { valid: Object.keys(errors).length === 0, errors };
};


const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
  setContactData({ ...contactData, [e.target.name]: e.target.value });
};

const [submitLoader, setSubmitLoader] = useState(false);

const handleSubmission = async () => {
    const { valid: isValid, errors } = Validation(contactData);

  if (!isValid) {
    setErrors(errors);  // <-- set errors state here to show messages in UI
    return;             // stop further submission
  }

  setErrors({});  
 

  if (!isValid) {
    // Optionally show toast for missing fields
    toast({
      title: "Validation Error",
      description: "Please fill in all required fields.",
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    return;
  }

  // 🔴 Explicitly check if a file is uploaded
  if (!contactData.list) {
  toast({
    title: "Attachment Missing",
    description: "Please upload a spreadsheet file before submitting.",
    status: "error",
    duration: 4000,
    isClosable: true,
    position: "top",
  });
  return;
}


  setSubmitLoader(true);

  const formData = new FormData();
  formData.append('client_name', contactData.client_name);
  formData.append('phone', contactData.phone);
  formData.append('email', contactData.email);
  formData.append('list', contactData.list); // ✅ At this point, it's guaranteed to be a File

  try {
    const response = await axios.post(
      'https://api.zendit.ng/api/v1/submit-client-form',
      formData
    );
    console.log('Success:', response.data);

    toast({
      title: "Request",
      description: "Request submitted successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    setContactData({ client_name: '', phone: '', email: '', list: '' });
   

  } catch (error) {
    toast({
      title: "Error",
      description: "Problem submitting request",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  } finally {
    setSubmitLoader(false);
  }
};




  return (
    <div ref={ref} className=' '>
        <Box className=' grid lg:grid-cols-2 mt-[60px] w-10/12 lg:w-10/12 m-auto'>
            <Box>
                <Box><Image alt='' src={Zeditlogo} /></Box>
                <Box className=' text-[18px] lg:mt-[20px] mt-[10px]'>
                                       <Text className=' pt-[20px] lg:pt-[30px] text-[#031966]'>Your trusted Aso ebi Distribution partner</Text> 
                   <Text className='text-[#031966] italic lg:pt-[20px] pt-[10px] lg:text-[20px] text-[18px] '>Reliable and efficient</Text>
                </Box>
            </Box>
            <Box data-aos="fade-up" className=' mt-[20px] lg:mt-0 grid gap-y-[20px]'>
              <Box>
                    <Contact_input names='client_name' label='Client’s Name' changes={handleChanges} values={contactData.client_name}  />
                {errors.client_name && <p style={{ color: 'red' }}>{errors.client_name}</p>}
              </Box>
              <Box>
                     <Contact_input names='phone' label='Phone Number' changes={handleChanges} values={contactData.phone}/>
                      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
              </Box>
              <Box>
                      <Contact_input names='email' label='Email address' changes={handleChanges} values={contactData.email}/>
                      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </Box>
              <Box>
                 {errors.list && <Text className=' text-right' style={{ color: 'red' }}>Upload Spreadsheet list</Text>}
              </Box>
            </Box>
            <Box className=' grid lg:hidden mt-[10px]'>
            <SubmitComponent setContactData={setContactData} submitLoader={submitLoader} handleSubmission={handleSubmission} />
            </Box>
           
        </Box>
        <Box className=' lg:flex flex-col-reverse lg:flex-row items-center justify-between w-11/12 m-auto lg:pl-[40px] mt-[50px] pb-[40px] '>
          <Box className=' flex gap-x-[20px] justify-between lg:justify-normal lg:w-full w-9/12 m-auto'>
            <IconButton 
          
         backgroundColor={'transparent'}
  icon={<Box className=' flex items-center  '>
<Image alt='' src={Cover} className=' h-[30px] w-[30px]'  /><Box>
</Box>
  </Box>} // Replace with a real icon like <AddIcon />
  onClick={handleClick}
  aria-label="Placeholder icon button"
/>
 <IconButton
 backgroundColor={'transparent'}
  icon={<svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8522 0.869799C13.8522 0.682334 13.7869 0.502547 13.6706 0.369989C13.5544 0.237431 13.3967 0.162961 13.2323 0.162961H10.1332C8.57259 0.0743104 7.04466 0.693643 5.88324 1.88564C4.72183 3.07764 4.02134 4.74539 3.93483 6.52451V10.3414H0.835655C0.671265 10.3414 0.513607 10.4159 0.397366 10.5485C0.281124 10.681 0.21582 10.8608 0.21582 11.0483V14.7238C0.21582 14.9113 0.281124 15.0911 0.397366 15.2236C0.513607 15.3562 0.671265 15.4307 0.835655 15.4307H3.93483V24.9023C3.93483 25.0898 4.00013 25.2696 4.11637 25.4021C4.23261 25.5347 4.39027 25.6091 4.55466 25.6091H8.27367C8.43806 25.6091 8.59572 25.5347 8.71196 25.4021C8.8282 25.2696 8.89351 25.0898 8.89351 24.9023V15.4307H12.1414C12.2793 15.4329 12.4138 15.3827 12.5239 15.288C12.6339 15.1933 12.7131 15.0594 12.7489 14.9076L13.6414 11.2321C13.6661 11.1276 13.6694 11.0181 13.6511 10.912C13.6328 10.8059 13.5934 10.7059 13.536 10.6199C13.4785 10.5339 13.4045 10.464 13.3196 10.4157C13.2347 10.3675 13.1412 10.342 13.0464 10.3414H8.89351V6.52451C8.92434 6.17459 9.06844 5.85034 9.29767 5.61508C9.52689 5.37982 9.82479 5.25044 10.1332 5.2522H13.2323C13.3967 5.2522 13.5544 5.17773 13.6706 5.04517C13.7869 4.91261 13.8522 4.73282 13.8522 4.54536V0.869799Z" fill="#FE9534"/>
</svg>
} // Replace with a real icon like <AddIcon />
  onClick={() => {
    window.open('https://www.linkedin.com/company/zendit-technology/posts/?feedView=all', '_blank');
  }}
  aria-label="Facebook Icon Button"
/>
 <IconButton
 backgroundColor={'transparent'}
  icon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.171 10.6753L24.1055 0.518127H21.9883L14.2304 9.33743L8.03426 0.518127H0.887695L10.2575 13.8545L0.887695 24.5058H3.00502L11.1975 15.1923L17.7411 24.5058H24.8877L15.1704 10.6753H15.171ZM12.271 13.972L11.3216 12.644L3.76792 2.07694H7.01999L13.1159 10.6049L14.0653 11.9329L21.9893 23.0179H18.7372L12.271 13.9725V13.972Z" fill="#FE9534"/>
</svg>
} // Replace with a real icon like <AddIcon />
  onClick={() => {
    window.open('https://x.com/Zendittech', '_blank');
  }}
  aria-label="Twitter Icon Button"
/>
 <IconButton
 backgroundColor={'transparent'}
  icon={<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3721 0.0181274C18.1759 0.0181274 18.6505 0.0321274 20.1429 0.102127C21.6339 0.172127 22.6489 0.405928 23.5421 0.753128C24.4661 1.10873 25.2445 1.59033 26.0229 2.36733C26.7348 3.06718 27.2856 3.91375 27.6371 4.84813C27.9829 5.73993 28.2181 6.75633 28.2881 8.24733C28.3539 9.73973 28.3721 10.2143 28.3721 14.0181C28.3721 17.8219 28.3581 18.2965 28.2881 19.7889C28.2181 21.2799 27.9829 22.2949 27.6371 23.1881C27.2866 24.123 26.7356 24.9698 26.0229 25.6689C25.3228 26.3806 24.4763 26.9314 23.5421 27.2831C22.6503 27.6289 21.6339 27.8641 20.1429 27.9341C18.6505 27.9999 18.1759 28.0181 14.3721 28.0181C10.5683 28.0181 10.0937 28.0041 8.60127 27.9341C7.11027 27.8641 6.09527 27.6289 5.20207 27.2831C4.26733 26.9324 3.42061 26.3815 2.72127 25.6689C2.00924 24.9692 1.45837 24.1226 1.10707 23.1881C0.75987 22.2963 0.52607 21.2799 0.45607 19.7889C0.39027 18.2965 0.37207 17.8219 0.37207 14.0181C0.37207 10.2143 0.38607 9.73973 0.45607 8.24733C0.52607 6.75493 0.75987 5.74133 1.10707 4.84813C1.4574 3.91318 2.0084 3.06638 2.72127 2.36733C3.42081 1.65505 4.26747 1.10415 5.20207 0.753128C6.09527 0.405928 7.10887 0.172127 8.60127 0.102127C10.0937 0.0363274 10.5683 0.0181274 14.3721 0.0181274ZM14.3721 7.01813C12.5156 7.01813 10.7351 7.75563 9.42232 9.06838C8.10957 10.3811 7.37207 12.1616 7.37207 14.0181C7.37207 15.8746 8.10957 17.6551 9.42232 18.9679C10.7351 20.2806 12.5156 21.0181 14.3721 21.0181C16.2286 21.0181 18.0091 20.2806 19.3218 18.9679C20.6346 17.6551 21.3721 15.8746 21.3721 14.0181C21.3721 12.1616 20.6346 10.3811 19.3218 9.06838C18.0091 7.75563 16.2286 7.01813 14.3721 7.01813ZM23.4721 6.66813C23.4721 6.204 23.2877 5.75888 22.9595 5.43069C22.6313 5.1025 22.1862 4.91813 21.7221 4.91813C21.2579 4.91813 20.8128 5.1025 20.4846 5.43069C20.1564 5.75888 19.9721 6.204 19.9721 6.66813C19.9721 7.13226 20.1564 7.57738 20.4846 7.90556C20.8128 8.23375 21.2579 8.41813 21.7221 8.41813C22.1862 8.41813 22.6313 8.23375 22.9595 7.90556C23.2877 7.57738 23.4721 7.13226 23.4721 6.66813ZM14.3721 9.81813C15.486 9.81813 16.5543 10.2606 17.3419 11.0483C18.1296 11.8359 18.5721 12.9042 18.5721 14.0181C18.5721 15.132 18.1296 16.2003 17.3419 16.988C16.5543 17.7756 15.486 18.2181 14.3721 18.2181C13.2582 18.2181 12.1899 17.7756 11.4022 16.988C10.6146 16.2003 10.1721 15.132 10.1721 14.0181C10.1721 12.9042 10.6146 11.8359 11.4022 11.0483C12.1899 10.2606 13.2582 9.81813 14.3721 9.81813Z" fill="#FE9534"/>
</svg>
} // Replace with a real icon like <AddIcon />
 onClick={() => {
    window.open('https://www.instagram.com/zendittech/', '_blank');
  }}
  aria-label="Insta Icon Button"
/>
 <IconButton
 backgroundColor={'transparent'}
  icon={<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.7744 0.518127H2.76816C1.66816 0.518127 0.774414 1.42438 0.774414 2.53688V26.4994C0.774414 27.6119 1.66816 28.5181 2.76816 28.5181H26.7744C27.8744 28.5181 28.7744 27.6119 28.7744 26.4994V2.53688C28.7744 1.42438 27.8744 0.518127 26.7744 0.518127ZM9.23691 24.5181H5.08691V11.1556H9.24316V24.5181H9.23691ZM7.16191 9.33063C5.83066 9.33063 4.75566 8.24938 4.75566 6.92438C4.75566 5.59938 5.83066 4.51813 7.16191 4.51813C8.48691 4.51813 9.56816 5.59938 9.56816 6.92438C9.56816 8.25563 8.49316 9.33063 7.16191 9.33063ZM24.7932 24.5181H20.6432V18.0181C20.6432 16.4681 20.6119 14.4744 18.4869 14.4744C16.3244 14.4744 15.9932 16.1619 15.9932 17.9056V24.5181H11.8432V11.1556H15.8244V12.9806H15.8807C16.4369 11.9306 17.7932 10.8244 19.8119 10.8244C24.0119 10.8244 24.7932 13.5931 24.7932 17.1931V24.5181Z" fill="#FE9534"/>
</svg>
} // Replace with a real icon like <AddIcon />
 onClick={() => {
    window.open('https://www.linkedin.com/company/zendit-technology/posts/?feedView=all', '_blank');
  }}
  aria-label="LinkedIn Icon Button"
/>
          </Box>
           <Box className=' lg:grid hidden'>
            <SubmitComponent setContactData={setContactData} submitLoader={submitLoader} handleSubmission={handleSubmission} />
            </Box>  
        </Box>
    </div>
  )
}

export default Contact