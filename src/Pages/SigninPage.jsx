import React from 'react'
import { Button, FormControl,FormLabel,Input,Image,Box,Heading,Text,VStack, Container } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa';
import { AppContext } from '../Context/AppContext';
export default function SigninPage() {
  const { user,setUser } = React.useContext(AppContext);
  function handleEmail(e)
  {

setUser(prev=>{ 
  return{
      ...prev,email:e.target.value
  }
})
  }
  return (
    <div >
      <Container m="auto">
       <Image h="50px" src="https://tse2.mm.bing.net/th?id=OIP.dpAR5dRLYnnCTYxwzmKMEgHaB7&pid=Api&P=0" alt="logo" />
 <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
     <Heading as='h4' size='md'>
     Ready to take the next step?
  </Heading>
         <Text>
         Create an account or sign in. </Text>
         

    <Text fontSize="x-small">By creating an account or logging in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms</Text>

       
       
    <VStack>
    <Button colorScheme='gray' leftIcon={<FaGoogle />}>
    Continue with Google
  </Button>
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
  Continue with Facebook
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
  Continue with Twitter
  </Button>
</VStack>
 
      
     <FormControl isRequired>
  <FormLabel>Email address</FormLabel>
  <VStack>
  <Input onChange={handleEmail} placeholder='' />
  <Link to="/password"><Button colorScheme='blue' size='lg'>
   Continue<span>-</span>
  </Button></Link>
  </VStack>
</FormControl>
         
          
    </Box>


    </Container>

    </div>
  )
}
