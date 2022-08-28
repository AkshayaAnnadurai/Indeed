import React, { useEffect, useState } from 'react'
import { Input,Text,InputGroup,InputLeftElement,InputRightElement,Button,Icon } from '@chakra-ui/react'
import {SearchIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"
import PopularSearch from '../Components/PopularSearch'
import Footer from '../Components/Footer'
import Fetch from '../Components/Fetch'

import axios from "axios"
export default function HomePage() {
  const[details,setDetails] =useState([])
  const[state,setState]=useState("")
  const[filterstate,setFilterState]=useState("")
function handleChange(e){
setState(e.target.value)
}
function handleSubmit(state){
  setFilterState(state)
}
  
  useEffect(()=>{
async function getData(){
try{
  const res=await axios.get(`https://minmini-server.herokuapp.com/jobposts`)
 
const filt=res.data.filter((el)=>(el.name===filterstate))
  setDetails(filt)
  }
  catch(err){
    console.log(err)
  }
}
getData()
},[filterstate])

console.log(filterstate, "hi")
console.log(details,"hello")
  return (
    <div style={{marginTop:"50px"}}>
    <div style={{display:"flex",marginLeft:"250px"}}>
   <div style={{width:"30%",marginRight:"20px"}}>
            <InputGroup variant='outline' size="md" >
   
      <InputLeftElement pl="2rem" >
        <Text>What</Text>
      </InputLeftElement>
      <Input pl="4.5rem" onChange={handleChange}
      
        placeholder='Job title, keywords, or company'
        
      />
      <InputRightElement  children={<SearchIcon color='gray.300' />}/>
    </InputGroup>
  
    </div>
    <div style={{width:"30%",marginRight:"20px"}}>
    <InputGroup variant='outline' size="md" width="auto" m="auto">

<InputLeftElement pl="2rem" >
<Text>Where</Text>
</InputLeftElement>
<Input pl="4.5rem" 

placeholder='City,state or pin code'

/>
<InputRightElement  children={<Icon color='gray.300' bgSize="auto">
<path fill="#767676" fill-rule="evenodd" d="M5.81104 8.2c0-2.322 1.87303-4.2 4.18889-4.2 2.31587 0 4.18887 1.878 4.18887 4.2 0 2.581-2.8123 6.1691-3.8282 7.3811-.1906.2274-.5307.2274-.72131 0C8.62332 14.3691 5.81104 10.781 5.81104 8.2zm4.1889 2.0029c1.10456 0 1.99996-.89545 1.99996-2.00002 0-1.10457-.8954-2-1.99996-2-1.10457 0-2 .89543-2 2s.89543 2.00002 2 2.00002z" clip-rule="evenodd"></path>
</Icon>  }/>
</InputGroup>

</div>
<div>
<Button colorScheme='blue' size='md' onClick={()=>handleSubmit(state)}>
   Find jobs
  </Button>
</div>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}><Link to="/sigin" ><Text color="blue">Post your resume</Text></Link><Text>- It only takes a few seconds</Text></div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}><Link to="/postjob" ><Text color="blue">Employers: Post a job </Text></Link><Text>– Your next hire is here</Text></div>
<PopularSearch setFilterState={setFilterState} />
<Fetch details={details}/>
<Footer />
</div>
  )
}
