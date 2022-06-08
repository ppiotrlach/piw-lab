import Button from '@mui/material/Button';
import React from 'react';
import '../App.css';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";

function Notice({ notice, onSendMsg }) {

  const sendMsg = () => {
    onSendMsg(notice);
  }

  return (

    <Card variant="outlined" sx={{
      display: 'flex', maxWidth: 600, align: 'center', justifyContent: 'center',
      alignItems: 'center', marginLeft: '30%', padding: '15px', marginBottom: '10px'
    }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
        >
          {notice.classes}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '20px' }}>
          {notice.description}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          {notice.tags.split(" ").map(tag => {
            return "[" + tag + "] ";
          })}
        </Typography>
        <Typography sx={{ marginLeft: '60%', marginTop: '20px' }} variant="subtitle1" color="text.secondary">
          by {notice.name}
        </Typography>
        <Button variant="outlined" sx={{ marginTop: '0px' }} onClick={sendMsg} component={Link} to="/message"> message</Button>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}

export default Notice;
