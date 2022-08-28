import React from 'react'
import { Box,Text,Heading,Container, VStack, HStack, Image } from "@chakra-ui/react"
export default function Employer() {
  return (
   <div >
    <Container marginLeft="200px" pt="40px">
      <HStack gap="40px">
        <Box maxW="310px" minW="310px" borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5" m="auto">
         <VStack>
           <Text color="teal">1</Text> 
           <Heading>Create your  free account</Heading> 
          
           <Text>All you need is your email address to  create an account and start building
           your job post.</Text> 
           </VStack>
        </Box>
        <Box maxW="310px" minW="310px" borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5"  m="auto" >
         <VStack>
           <Text color="teal">2</Text> 
           <Heading>Build your job post</Heading> 
          
           <Text>Then just add a title, description, and
           location to your job post, and you're
           ready to go.</Text> 
           </VStack>
        </Box>
        <Box maxW="310px" minW="310px" borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5"  m="auto">
           <Text color="teal">3</Text> 
           <Heading>Post  your </Heading> 
           <Heading>job</Heading>
           <Text>After you post your job use our state of
          the art tools to help you find dream
            talent.</Text> 
        </Box>
        </HStack>
     </Container>
     <Container>
      <VStack p="6">
      <Heading>Save time and effort in your hiring journey.</Heading>
      <Text fontSize="medium">Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</Text>
      </VStack>
     </Container>
     <Container marginLeft="200px" pt="40px">
      <HStack gap="10px">
<Box display="flex" width="auto" >
   <Box  minH="180px" pr="2rem">
   <Image width="100%" src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/visibility-aurora-01633a.svg" alt="piv1" />
</Box>
<Box textAlign="left">
<Heading>Get more visibility</Heading>
<Text>Sponsor your job to ensure it gets seen by the right people.</Text>
</Box>
</Box>
<Box display="flex">
   <Box  pr="2rem">
   <Image width="100%" src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/quality-aurora-6ce509.svg" alt="piv1" />
</Box>
<Box textAlign="left">
<Heading>Find quality applicants</Heading>
<Text>List your required skills for the job so relevant candidates apply.</Text>
</Box>
</Box>
</HStack>
     </Container>
     </div>
  )
}
// boxShadow="inner" pl="6" w="30%"