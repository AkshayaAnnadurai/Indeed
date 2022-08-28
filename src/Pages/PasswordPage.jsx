import React from 'react'
import { Button, FormControl,FormLabel,Input,Image,Box,Heading,Text,VStack, Container } from '@chakra-ui/react'
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
export default function PasswordPage() {
    const {password,setPassword,isAuth,setIsAuth,email} = React.useContext(AppContext);
    function handlePassword(e)
    {
        setPassword(prev=>{ 
            return{
                ...prev,password:e.target.value
            }
        })

    }
    function handleSubmit(e){
     
      e.preventDefault();

    
setIsAuth(true)

//       const data=JSON.parse(localStorage.getItem("userdata"))|| []
// localStorage.setItem("userdata",JSON.stringify([...data,user]))
// const arr=JSON.parse(localStorage.getItem("userdata")) 
// var a=false
// for(var i=0;i<arr.length;i++)
// {
// if(arr[i].email===data.useremail)
// {
// if(arr[i].password===data.userpassword)
// {
// alert("Login Success")
//     a=true
// }
// }

// }
// if(a===false)
// {
//     alert("Failed")
// }

    }
    
   



  return (
    <div>
       
       <Container m="auto">
       <Image h="50px" src="https://tse2.mm.bing.net/th?id=OIP.dpAR5dRLYnnCTYxwzmKMEgHaB7&pid=Api&P=0" alt="logo" />
 <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' textAlign="left" pl="5">
     
     <Heading as='h4' size='md'>
     Welcome back
  </Heading>
         <Text>
         Signing in as akshaysrij@gmail.com (not you)
        </Text>
         

    

       
       

<Text fontSize="x-small">By signing in to your account, you agree to Indeed's Terms, Cookie and Privacy policies.
</Text>
      
     <FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <VStack>
  <Input onChange={handlePassword} placeholder='' />
  <Button onClick={handleSubmit} colorScheme='blue' size='lg'>
  <Link to="/login">Signin</Link>
  </Button>
  <Button colorScheme='teal' variant='ghost'>
   Forgot Password
  </Button>   
          
  </VStack>
</FormControl>

    </Box>


    </Container> 


    </div>
  )
}
