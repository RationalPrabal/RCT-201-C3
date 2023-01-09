import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile'
import axios from 'axios'
import { Box,Grid } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })
import Projects from '../components/Projects'
import React from 'react'
import Navbar from '../components/Navbar'
export default function Home({data,data1}) {
  const [theme,setTheme]= React.useState(false)
  
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Box display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-around" bg={theme ? "black" : "white"}>
      <Box w={{base:"100%",sm:"100%",md:"20%"}} textAlign="center">
    <Profile data={data} theme={theme} />
    </Box>
    <Box w={{base:"100%",sm:"100%",md:"70%"}}>
  <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}} gap={6}   border={"3px solid red"}>
        {data1.items.map(el=><Projects key={el.id} {...el} theme={theme}/>)}
    </Grid>
    </Box>
     </Box>
    </>
  )
}

export async function  getStaticProps(){
let res=await axios.get("https://api.github.com/users/RationalPrabal")
let res1= await axios.get("https://api.github.com/search/repositories?q=user:RationalPrabal+fork:true&sort=updated&per_page=10&type=Repositories")

return {
 props:{
  data: res.data,
  data1:res1.data
}
}
}
