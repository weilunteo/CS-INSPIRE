import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SingleCard = ({ icon, bias_type, description }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '50px' }}>
      <div style={{ width: '92%', height: '200px', margin: '10px'}}>
        <img src={`../src/assets/${icon}`} alt="Bias Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" variant="h6">
          {bias_type}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
