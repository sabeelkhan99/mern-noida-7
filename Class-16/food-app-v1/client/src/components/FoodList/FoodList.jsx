import React from 'react'
import Food from '../Food/Food';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const FoodList = ({foodList}) => {
  return (
      <Box sx={{width:'80vw', margin:'0px auto'}}>
          <h1>Explore Foods</h1>
            <Grid container spacing={{ xs: 2, md: 3 }}>
            {
                foodList.map((food, idx) => {
                    return (
                        <Grid key={idx} item xs={12} md={6} lg={4}>
                            <Food
                                    name={food.name}
                                    price={food.price}
                                    desc={food.desc}
                                    imageUrl={food.imageUrl}
                            />
                        </Grid>)
                })      
            }
            </Grid>
    </Box>
  )
}

export default FoodList;