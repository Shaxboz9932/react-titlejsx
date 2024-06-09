import React from 'react'
import SearchAppBar from "../components/AppBar"
import TourCard from "../components/TourCard"
import { Container, Grid, Typography } from "@mui/material"
import { useSearch, useStoreTour } from '../state/State'
import { NavLink } from 'react-router-dom'

const Home = ({searchTours}) => {
    const {tours} = useStoreTour()
    console.log(searchTours)
  return (
    <div className="App">
            <Container>
                
                <Grid paddingY={2} container spacing={3}>
                    {searchTours 
                    ?
                     searchTours.map((tour, idx) => (<h1 key={idx}>{tour}</h1>))
                    :
                     tours.map((tour, idx) => {
                        return(
                            <TourCard tour={tour} key={idx}/>
                        )
                        }
                    )
                     }
                </Grid>
                       
            </Container>       
               
    </div>
  )
}

export default Home
