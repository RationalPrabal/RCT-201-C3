import React from 'react'
import Image from 'next/image'
import { Box,Button,Text } from '@chakra-ui/react'
import Link from 'next/link'
const Profile = ({data,theme}) => {
    console.log(data)
  return (
    <Box>
        <Box textAlign={"center"} border="2px solid red"p="10">
            <Image  src={data?.avatar_url} alt="prabal" width="150"  height={"150"} style={{margin:"auto", borderRadius:"50%"}} />
            <Text as="b" color="teal" fontSize={"30"}>{data.name}</Text>
            <br></br>
            <Text as="b" fontSize={"18"}>@{data.login}</Text>
            <Text color={theme ? "white" : "black"}>{data.bio}</Text>
            <Box display={"flex"} justifyContent="space-around" mt="3">
           <Link href="https://drive.google.com/file/d/1-Hhb4PGQx0ntTXM1gacghUfrHt38ilyD/view?usp=share_link"><Button bg="teal">Resume</Button></Link> 
         <Link href={data.html_url}><Button bg="gray">Follow</Button></Link>   
            </Box>
        </Box>
        <Box color={"#84fdf8"} mt="5">
        <Text as="b">{data.bio}</Text>    
        </Box>
        <Box color={theme ? "white" : "black"}>
            <Text as="b">Full Stack Web Development</Text>
            <Text>Masai School</Text>
            <Text>August,2022 - Present</Text>
            <Text as="b">Bachelor in Technology</Text>
            <Text> GEC, Nowgong</Text>
            <Text>2016 - 2020</Text>
        </Box>
    </Box>
  )
}

export default Profile