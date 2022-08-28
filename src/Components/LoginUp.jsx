import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export default function LoginUp() {
    const {isAuth} =useContext(AppContext)
  return (
    <div>
        {isAuth  ? 
        
        ( <><h1>"LoginSuccess" </h1>
        <Link to="/">
        <Button colorScheme='teal' size='lg'>
        GO TO HOME
  </Button>
        
        </Link></>)
        : (<><h1>"Login Failed"</h1>
        <Link to="/signin">
        <Button colorScheme='teal' size='lg'>
        GO TO SIGNIN
  </Button>
        
        </Link>
        </>)
    
    }
    </div>
  )
}
