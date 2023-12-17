import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          backgroundColor: '#36454F',
          zIndex: 100,
        }}
      >
        <BottomNavigationAction 
            style = {{color:"white"}}
            label="Trending" 
            icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"white"}}
            label="Movies"  
            icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"white"}}
            label="Series" 
            icon={<TvIcon />} 
        />
         <BottomNavigationAction 
            style = {{color:"white"}}
            label="Search" 
            icon={<SearchIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"white"}}
            label="Rate Us" 
            icon={<StarRateIcon />} 
        />
      </BottomNavigation>
      
    </Box>
  );
}