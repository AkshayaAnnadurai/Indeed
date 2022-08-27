import React from 'react'
import { Button ,Stack} from '@chakra-ui/react'
import {SearchIcon } from '@chakra-ui/icons'

export default function PopularSearch() {
  return (
    <div style={{margin:"auto",width:"50%"}}>
        <Stack direction='column' spacing={4} pt="20px">
        <Stack direction='row' spacing={4}>
          <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="3rem" pr="3rem">
   software developer fresher
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
   Work from Home
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  driver
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
   hr fresher
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline' pl="2rem" pr="2rem">
  software testing
  </Button>
  </Stack>
  <Stack direction='row' spacing={4}>
          <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
   sales executive
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
   business analyst
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  receptionist
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
 data analyst
  </Button>
  <Button leftIcon={<SearchIcon />} colorScheme='grey' variant='outline'>
  seo executive
  </Button>
  </Stack>
  </Stack>
    </div>
  )
}
