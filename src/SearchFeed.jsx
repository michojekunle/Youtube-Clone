import React, {useState, useEffect } from 'react';
import {Box,Typography } from '@mui/material';
import Videos from './components/Videos';
import  { useParams } from 'react-router-dom'; 
import { fetchFromApi } from './utils/fetchFromApi';
import Loading from './components/Loading';


const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null)
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then(data => setVideos(data?.items))
  }, [searchTerm])


  if(!videos){
    return <Loading />
  }
  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography 
        variant="h4"
        fontWeight= "bold"
        mb={2}
        sx={{color: 'white', textAlign: 'center'}}
      >
        Search results for <span style={{ color: '#F31503'}}>{searchTerm}</span> Videos
      </Typography>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Videos videos={videos} />       
      </div>
  </Box>
  )
}

export default SearchFeed