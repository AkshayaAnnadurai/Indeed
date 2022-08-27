import React from 'react'
import { Box,Text,Heading,Container } from "@chakra-ui/react"
export default function Employer() {
  return (
    <Container display="flex" m="auto" w="100%">
        <Box boxShadow="inner" pl="6" w="30%">
           <Text>1</Text> 
           <Heading>Create your </Heading>
            <Heading>free account</Heading> 
           <Text>All you need is your email address to</Text>
           <Text>create an account and start building</Text>
           <Text> your job post.</Text> 
        </Box>
        <Box>
           <Text>2</Text> 
           <Heading>Build your </Heading>
            <Heading>job post</Heading> 
           <Text>Then just add a title, description, and</Text>
           <Text>location to your job post, and you're</Text>
           <Text> ready to go.</Text> 
        </Box>
        <Box>
           <Text>3</Text> 
           <Heading>Post </Heading>
            <Heading>your job</Heading> 
           <Text>After you post your job use our state of</Text>
           <Text>the art tools to help you find dream</Text>
           <Text> talent.</Text> 
        </Box>
     </Container>
   
  )
}
