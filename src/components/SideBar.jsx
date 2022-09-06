import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constant';

const SideBar = () => (
   <Stack 
    direction={"row"}
    className='stack-aside'
    sx= {{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
    }}
   >
    {
        categories.map(category => (
            <button className='category-btn'>
                <span>{category.icon}</span>
                <span>{category.name}</span> 
            </button>
        ))
    }
    
   </Stack>
)

export default SideBar
