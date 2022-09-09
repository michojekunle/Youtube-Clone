import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/fetchFromApi'
import Loading from './Loading';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos)

  useEffect( () => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  },[id])

  if(!(channelDetail && videos)){
    return <Loading />
  }
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'rgb(34,193,195) linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
       />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box> 
      <Box display='flex' p='2'>
        <Box sx={{mr: { sm: '100px'}}} />
        <Videos videos={videos} />
      </Box> 
    </Box>
  )
}

export default ChannelDetail
