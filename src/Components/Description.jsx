import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Text, Box,Heading, ButtonGroup, Icon,Button,UnorderedList,ListItem, Container } from '@chakra-ui/react'
import {Link } from "react-router-dom"
export default function Description() {
const params=useParams()
const[data,setData] =useState([])

// const[filterstate,setFilterState]=useState("")

    useEffect(()=>{
        async function getData(id){
        try{
          const res=await axios.get(`https://minmini-server.herokuapp.com/jobposts/${id}`)
         
        // const filt=res.data.filter((el)=>(el.name===filterstate))
        console.log(res.data)
          setData(res.data)
          }
          catch(err){
            console.log(err)
          }
        }
        getData(params.id)
        },[params.id])
        console.log(params.id)
  return (
    <div>
       <Container>
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
       
      
       <Button  colorScheme='blue' size='lg'>
 Apply Now
  </Button>
        
    </Box>
   
    {/* <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
      <Heading as='h4' size='md'>
 Job Details
    </Heading>
    <Box>
      <Heading>Salary</Heading>
      <Text>{data.payscale}
               </Text>
    </Box>
    <Box>
      <Heading>JobType</Heading>
      <Text> {data.jobtype}
               </Text>
    </Box>
    <Box>
      <Heading>Qualifications</Heading>
      <UnorderedList>
  <ListItem>Bachelor's Required</ListItem>
  <ListItem>Java: 2 years Required</ListItem>
  <ListItem>Java Preferred</ListItem>
 
</UnorderedList>
    </Box>      
    <Box>
      <Heading>Full Job Description</Heading>
      <Text> Key Accountabilities
               </Text>
               <Text>
              {data.description[0]}
              </Text>
              <Text>
              {data.description[1]}
              </Text>
    </Box>  
   
 <Box>
       <Text>
            {data.address}
            </Text>
  
         
            <Text>
           
           </Text>
         
         <ButtonGroup leftIcon={<Icon>
          
         </Icon>}>
  
        {data.jobtype}
        
         </ButtonGroup>
   
           
          
           <Text>
              {data.apply}
              </Text>
              <Text>
              {data.employer}
              </Text>
              <Text>
              {data.candidates}
              </Text>
              </Box>    
              </Box>  */}
    </Container>  
    </div>
  )
}
