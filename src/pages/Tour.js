import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion'
import { useParams } from 'react-router-dom'

const Tour = ({item}) => {
    const id = useParams().id
    const newArr = item.filter((i) => (i.id === Number(id)))
    
    return (
        <Container sx={{width: 900}}>
            <Typography variant='h4' component='h1' marginTop={2}>
                {newArr[0].name}
            </Typography>
            <Box sx={{display: 'flex'}} marginTop={2}>
                <img width={550} height={325} src={newArr[0].image} alt="" />
                <ImageCollage />
            </Box>
            <Box marginY={2}>
                <Typography variant='h6' component='h3'>
                    About This Ticket
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab architecto natus similique saepe facilis hic temporibus sit porro quis voluptates rerum, officiis esse officia nostrum totam? Laboriosam, facere odio eius quasi possimus debitis, iure obcaecati quia libero error iusto officia recusandae cumque quisquam. Facere, nobis quam iste maiores saepe dolorem accusamus odit voluptatibus libero fugiat obcaecati soluta voluptates consequatur! Facilis eaque sint autem fugiat quos perferendis praesentium molestias aspernatur fuga ab libero quibusdam maiores pariatur, totam, enim cupiditate quis, accusamus modi tenetur facere accusantium quod id. Soluta est inventore hic. Tempore quidem magni rem, officia doloribus consectetur fugit quam.
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h3' marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions/>
            </Box>
        </Container>
  )
}

export default Tour
