import React from 'react'
import {Text,Stack,Heading,Button} from '@chakra-ui/react'
export default function Footer() {
  return (
    <div>
        <Text pt="20px">Indeed हिंदी में भी ऑफ़र करता है</Text>
        <Stack direction='column' spacing={4} pt="20px" >
        <Stack direction='row' spacing={4}>
            <Text>Career Advice</Text>
            <Text>Browse Jobs</Text>
            <Text>Browse Companies</Text>
            <Text>Salaries</Text>
            <Text>Indeed Events</Text>
            <Text>Work at Indeed</Text>
            <Text>Countries</Text>
            <Text>About</Text>
            <Text>Help Center</Text>
            <Text>Post a job</Text>
        </Stack>
        <Stack direction='row' spacing={4}>
            <Text>© 2022 Indeed</Text>
            <Text>Accessibility at Indeed</Text>
            <Text>Privacy Center</Text>
            <Text>Cookies</Text>
            <Text>Privacy</Text>
            <Text>Terms</Text>
        </Stack>
        </Stack>
        <Heading pt="10px" pb="10px" as='h4' size='md'>Let employers find you</Heading>
        <Button colorScheme='blue'>Upload your resume</Button>
    </div>
  )
}
