import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Text, Box,Heading, ButtonGroup, Icon } from '@chakra-ui/react'
export default function Fetch() {
    const[details,setDetails] =useState([])
    useEffect(()=>{
async function getData(){
try{
    const res=await axios.get(`http://localhost:3000/posts`)
   
    setDetails(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
  getData()
},[])
   
  return (
   <>
    {details.map((data)=>( 
     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
     <Heading as='h4' size='md'>
   {data.role}
  </Heading>
         <Text>
            {data.company} </Text>
         

     <Text>
          {data.address}
          </Text>

       
          <Text>
         {data.payscale}
         </Text>
       
       <ButtonGroup leftIcon={<Icon>
        
       </Icon>}>

      {data.jobtype}
      
       </ButtonGroup>
 
         
          <Text>
           {data.shift}
           </Text>
         <Text>
            {data.apply}
            </Text>
            <Text>
            {data.employer}
            </Text>
            <Text>
            {data.candidates}
            </Text>
            <Text>
            {data.description[0]}
            </Text>
            <Text>
            {data.description[1]}
            </Text>
    </Box>
    
    ))}    
   </>
  )
}


// "id": 1,
//       "role": "Embedded Software Developer",
//       "company":"Horner Engineering India Pvt. Ltd.",
//       "address":"Bengaluru, Karnataka",
//       "payscale":"₹6,00,000 - ₹18,00,000 a year",
//       "jobtype":"Full-time",
//       "shift":"Day shift",
//       "apply":"Apply securely with Indeed resume",
//       "employer":"Responsive employer",
//       "candidates":"Hiring multiple candidates",
//       "description":["Identifying and reporting potential risks and omissions in hardware platform design and embedded software related manufacturing processes",
//       "Adequate training for production stuff in using available software tools, design rules and procedures during T2MFR stages"
//       ]