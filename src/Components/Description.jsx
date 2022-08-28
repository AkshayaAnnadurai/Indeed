import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Text, Box,Heading, ButtonGroup, Icon,Button } from '@chakra-ui/react'
import {Link } from "react-router-dom"
export default function Description() {
const params=useParams()
const[data,setData] =useState([])

const[filterstate,setFilterState]=useState("")

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
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
     <Heading as='h4' size='md'>
  Job Details
    </Heading>
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
   
    </div>
  )
}
