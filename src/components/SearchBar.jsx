import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper 
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr: { sm: 5 },
        }}
    >
    <input 
        type="text" 
        placeholder='Search...'
        value=''
        className='search-bar'
        onChange={() => {}}
    />
    <IconButton type='submit' sx={{color: 'red', p: '10px'}}>
        <Search />
    </IconButton>

    
    </Paper>
  )
}

export default SearchBar