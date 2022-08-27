

import { Container,Image,Flex} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import {Link} from "react-router-dom"



export default function Navbar() {
  return (
<Container maxW='100%' pt="10px" pb="10px" >
  <Flex>
  <Container maxW="50%">
  <Flex w="100%"

       
       spacing="10"
     
        justify="space-between">
   <Link to="/"><Image h="50px" src="https://tse2.mm.bing.net/th?id=OIP.dpAR5dRLYnnCTYxwzmKMEgHaB7&pid=Api&P=0" alt="logo" /></Link>
   <Link to="/"><Image h="50px" src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png" alt="logo1" /></Link>
   <Link to="/"><Text> Find jobs</Text></Link>
   <Link to="/reviews"><Text> Company reviews</Text></Link>
  <Link to="/salary"><Text>Salary Guide</Text></Link>
  </Flex>
  </Container>
  <Container  ml="50px" maxW="50%">
    <Flex  w="100%"

      
spacing="5"

 justify="space-evenly">
  <Link to="/signin"> <Text>Post your resume</Text></Link>
   <Link to="/signin"> <Text>Sign in</Text></Link>
   <Link to="/postjob"> <Text>Employers/Post job</Text></Link>
  </Flex>
  </Container>
  </Flex>
</Container>
  )
}