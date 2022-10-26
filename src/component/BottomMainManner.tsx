import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img11 from '/public/images/11.jpg'
import img12 from '/public/images/12.jpg'
import img13 from '/public/images/13.jpg'
import img14 from '/public/images/14.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BottomMainManner() {
  return (
    <Box sx={{ flexGrow: 1,marginTop:'50px'}}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={5}>
          <Item  sx={{ height:'300px'}}>
              <img style={{width:'100%', height:'100%', objectFit: 'contain'}} src={img11.src}/>
           </Item>
        </Grid>
        <Grid item xs={4}>
          <Item  sx={{ height:'300px'}}>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item  sx={{ height:'300px'}}>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item  sx={{ height:'300px'}}>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}