import React from 'react'
import { Box,Text ,Button} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {SunIcon} from "@chakra-ui/icons"
const Navbar = ({theme,setTheme}) => {
    const router=useRouter();
const Project=()=>{
    router.push("/projects")
}
const Prabal=()=>{
    router.push("/")
}
  return (
  <Box display={"flex"} justifyContent="space-between" fontSize={{base:"18",sm:"18",md:"25"}} bg={theme ? "black" : "white"}  color={theme ? "white" : "black"}>
    <Box display={"flex"} justifyContent="space-around" w="70%">
    <Text as="b" onClick={Prabal}>Prabal</Text>
    <Text as="b" onClick={Project}>Project</Text>
    <Text as="b">Education</Text>
    </Box>
    <Box display={"flex"}>
     <Button onClick={()=>setTheme(!theme)}>   <SunIcon/> </Button>
    <Image  src={"https://avatars.githubusercontent.com/u/108731705?v=4"} alt="prabal" width="30"  height={"30"} style={{margin:"auto", borderRadius:"50%"}} />
    </Box>
  </Box>
  )
}

export default Navbar