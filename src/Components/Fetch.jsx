import React from 'react'
import {Link } from "react-router-dom"
import {Text, Box,Heading, ButtonGroup, Icon } from '@chakra-ui/react'
export default function Fetch({details}) {
   
   console.log(details)
  return (
   <>
    {details.map((data)=>( 
     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
   <Link to={`/description/${data.id}`}>  <Heading as='h4' size='md'>
   {data.role}
  </Heading></Link>
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