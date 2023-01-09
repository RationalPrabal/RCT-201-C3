import React from 'react'
import axios from 'axios'
import Projects from '../components/Projects'
import { Grid } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
const ProjectsPage = ({data}) => {
    const [theme,setTheme]= React.useState(false)
    console.log(data)
  return (
    <>
    <Navbar theme={theme}  setTheme={setTheme}/>
    <Grid templateColumns={{base:"'repeat(1, 1fr)'", sm:"'repeat(2, 1fr)'",md: 'repeat(3, 1fr)'}} gap={6} w="100%" bg={theme ? "black" : "white"}>
        {data.items.map(el=><Projects key={el.id} {...el}/>)}
    </Grid>
    </>
   
  )
}

export default ProjectsPage

export async function getServerSideProps(){
let res= await axios.get("https://api.github.com/search/repositories?q=user:RationalPrabal+fork:true&sort=updated&per_page=10&type=Repositories")

return {
    props:{
     data: res.data
   }
   }
}
