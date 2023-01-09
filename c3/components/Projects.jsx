import React from 'react'
import { GridItem,Text,Box, Button} from '@chakra-ui/react'
import Link from 'next/link'
const Projects = ({...el}) => {
  return (
   <GridItem fontWeight={"700"} border="2px solid #00061c" p="10">
    <Text as="b" fontSize={"20"} color="Green">{el.name}</Text>
    <Box display={"flex"} justifyContent="space-between" >
        <Box display={"flex"}>
<Text color={"tomato"}>Forks:{el.forks_count}</Text>
<Text color="gold">Stars:{el.stargazers_count}</Text>   
</Box>
<Box>{el.language}</Box>
    </Box>
 <Link href={el.html_url}> <Button bg="blue">View repo</Button></Link>  
   </GridItem>
  )
}

export default Projects