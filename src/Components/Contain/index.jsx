import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./index.scss";
function Index() {
  // Dummy data for cards
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 1', content: 'Content for Card 4' },
    { id: 5, title: 'Card 2', content: 'Content for Card 5' },
    { id: 6, title: 'Card 3', content: 'Content for Card 6' },
    { id: 7, title: 'Card 1', content: 'Content for Card 1' },
    { id: 8, title: 'Card 2', content: 'Content for Card 2' },
    { id: 9, title: 'Card 3', content: 'Content for Card 3' },
    { id: 10, title: 'Card 1', content: 'Content for Card 4' },
    { id: 11, title: 'Card 2', content: 'Content for Card 5' },
    { id: 12, title: 'Card 3', content: 'Content for Card 6' },
  ];

  return (
    <div>
      <h1 className='cards-posision'>Cards Page</h1>

      <Grid container spacing={3}>
        {cardsData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Index;
