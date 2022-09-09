import React from 'react';
import { Box, Typography, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div> 
      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: {xs : '356px', md: '320px'},
          height: '256px',
          marginTop,
        }}
      >
        <Link to= {`/channel/${channelDetail?.id?.channelId ? channelDetail?.id?.channelId : '' }  `}>
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
            <CardMedia 
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                border: '1px solid #e3e3e3'
              }}
            />
            <Typography varaint="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}/>
            </Typography>
            {
              channelDetail?.statistics?.subscriberCount && (
                <Typography>
                  { parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Suscribers.
                </Typography>
              )
            }
          </CardContent>
        </Link>
      </Box>
    </div>
  )
}

export default ChannelCard;