import React from 'react';
import { Link } from 'react-router-dom';
import  { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl ,demoVideoUrl ,demoChannelTitle ,demoVideoTitle } from '../utils/constant';

const VideoCard = ({video: {id: { videoId }, snippet}}) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{ width: {xs: '100%', md: '320px', sm: '356px'}}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: { xs: '100%', md: '320px', sm: '356px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '86px'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography variant="subtitle1"
              fontWeight="bold" color="#fff">
            {
              snippet?.title.slice(0, 100) || demoVideoTitle.slice(0, 100)
            }
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography variant="subtitle2"
              fontWeight="bold" color="gray">
            {
              snippet?.channelTitle.slice(0, 100) || demoChannelTitle.slice(0, 100)
            }
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
