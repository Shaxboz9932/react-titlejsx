import React from 'react'
import { Grid, Paper, Typography, Box, Rating } from "@mui/material"
import { AccessTime } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import zIndex from '@mui/material/styles/zIndex'

const TourCard = ({tour}) => {
    return (
                // <NavLink>
                    <Grid item xs={3}>
                        <NavLink to={`/${tour.id}`} style={{textDecoration: 'none'}}>
                        <Paper elevation={3}>
                        <img src={tour.image} className='img'/>
                        <Box paddingX={1}>
                            <Typography variant='subtitle1' component='h2'>
                                {tour.name}
                                {/* <NavLink to={`/${tour.id}`} style={{textDecoration: 'none', color: 'black'}}>{tour.name}</NavLink> */}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}} paddingX={1}>
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography padding={1} variant='body2' component='p'>
                                {tour.duration} hours
                            </Typography>
                        </Box>
            
                        <Box sx={{display: 'flex', alignItems: 'center'}} paddingX={1} marginTop={3}>
                            <Rating value={tour.rating} readOnly precision={0.5} size='small'/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                    {tour.rating}
                            </Typography>
                            <Typography variant='body2' component='p' marginLeft={5.5}>
                                    ({tour.numberOfReviews})
                            </Typography>
                        </Box>
                        <Box paddingX={1}>
                            <Typography variant='h6' component='h3' marginTop={0.5}>
                                From C ${tour.price}
                            </Typography>
                        </Box>
                    </Paper>
                        </NavLink>
                        
                  </Grid>
            //    </NavLink>
    )
}

export default TourCard
