import React from 'react'
import { Button ,Stack} from '@chakra-ui/react'
import {SearchIcon } from '@chakra-ui/icons'

export default function PopularSearch({setFilterState}) {
  function handleClick(value){
    setFilterState(value)
  }
  return (
    <div style={{margin:"auto",width:"50%"}}>
        <Stack direction='column' spacing={4} pt="20px">
        <Stack direction='row' spacing={4}>
          <Button onClick={()=>handleClick("Software Developer")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="3rem" pr="3rem">
   software developer fresher
  </Button>
  <Button onClick={()=>handleClick("Work from Home")}leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
   Work from Home
  </Button>
  <Button onClick={()=>handleClick("driver")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  driver
  </Button>
  <Button onClick={()=>handleClick("hrfresher")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
   hr fresher
  </Button>
  <Button onClick={()=>handleClick("softwaretesting")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
  software testing
  </Button>
  </Stack>
  <Stack direction='row' spacing={4}>
          <Button onClick={()=>handleClick("salesexecutive")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
   sales executive
  </Button>
  <Button onClick={()=>handleClick("businessanalyst")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
   business analyst
  </Button>
  <Button onClick={()=>handleClick("receptionist")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  receptionist
  </Button>
  <Button onClick={()=>handleClick("dataanalyst")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
 data analyst
  </Button>
  <Button onClick={()=>handleClick("seoexecutive")} leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  seo executive
  </Button>
  </Stack>
  </Stack>
    </div>
  )
}
