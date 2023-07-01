import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const SingleCard = ({ icon, bias_type, description }) => {
    const navigate = useNavigate();

    const lower_bias_type = bias_type.charAt(0).toLowerCase() + bias_type.slice(1);

    const handleLearnMore = () => {
        if (lower_bias_type == "education" || lower_bias_type == "gender" || lower_bias_type == "ageism" || lower_bias_type == "affinity"){
          navigate(`/toolkit/${lower_bias_type}`);
        }
        else if (lower_bias_type == "halo Effect"){
          navigate(`/toolkit/halo-effect`);
        }
        else{
          navigate(`/toolkit/horns-effect`);
        }

      };
    
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
        <Button size="small" variant="contained" color="primary" onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
