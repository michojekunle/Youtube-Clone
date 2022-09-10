import React, {useState, useEffect } from 'react';
import { Stack, Box,Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';
import Loading from './Loading';
import InternetErr from './InternetErr';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [disconnected, setDisconnected] = useState(false);

  useEffect(() => {
    setVideos([])
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then(data => {setVideos(data.items)})

    setTimeout(() => {
      if(!videos) {
        setDisconnected(true);
      }
    },7543000); 

  }, [selectedCategory, videos])

  
 
  return ( 
    <Stack sx={{ flexDirection: {sx : 'column', md: 'row'} }}>
        <Box sx={{height: { sx : 'auto', md: '92vh' }, 
                  borderRight: '1px solid #3d3d3d', 
                  px: { sx: 0, md: 2 }}}
        >
          <SideBar selectedCategory= {selectedCategory} setSelectedCategory={setSelectedCategory}/>

          <Typography 
              className='copyright'
              variant="body2" 
              sx={{
                mt: 1.5, color: '#fff'
              }}
          >
            Copyright 2022 <a href="https://github.com/michojekunle">AMD</a> 
          </Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
              <Typography 
                variant="h4"
                fontWeight= "bold"
                mb={2}
                sx={{color: 'white', textAlign: { xs: 'center' }}}
              >
                {selectedCategory} <span style={{ color: '#F31503'}}>videos</span>
              </Typography>
              
              { !disconnected ? (
                videos.length ? <Videos videos={videos} />: <Loading /> ) : <InternetErr />
              }
        </Box>
    </Stack>
  )
}

export default Feed