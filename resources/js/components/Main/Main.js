import React from 'react';
import { Box } from '@mui/material';
import Header from './Header/Header';
import theme from '../../styles/theme';

function Main(){
    return(
        <Box 
         width="100%"
         height="100%"
         sx={{backgroundColor:theme.palette.background.main}}
         >
            <Header />
        </Box>
    )
}

export default Main