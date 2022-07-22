import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Data from './fakeData.json'
import { positions } from '@mui/system';
const cards = Data.data

console.log(cards)
const theme = createTheme();
export default function Album() {
  return (
    
      
     
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing= '7%' >
            {cards.map((card) => (
              <Grid item key={"card"+card.id} xs={12} sm={6} md={4} direction= "column" >
                <Card
                  className='card'
                >
                  <Container className='cardImageFrame' >
                    <CardMedia 
                      className = "cardImage"
                      component="img"
                      // sx={{
                      //   // 16:9
                      //   pt: '56.25%',
                      // }}
                      image={card.image}
                      alt="random"
                    />
                  </Container>
                  <Stack
                    direction= "row"
                    spacing= {2}
                   sx = {{ 
                    justifyContent: 'center',
                    marginTop:'-5%'
                   }}>
                  <Button variant="contained" color="primary" size='xs' className='button' >View</Button>
                  <Button variant="contained" color="primary" className='button' >Contained</Button>
                  </Stack>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="p5" component="h5">
                {card.title}
                    </Typography>
                    <p3 className="discriptionText">
              {card.description}
            </p3>
                  </CardContent>
                  <div >
                  
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}