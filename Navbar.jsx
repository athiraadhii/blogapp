import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          
          <Typography variant="h6" style={{textAlign:'left'}} component="div" sx={{flexGrow:1}}>
            BlogApp
          </Typography>
          <Button > <Link to={'/add'} style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
          <Button ><Link to={'/view'}style={{color:'white',textDecoration:'none'}}>View</Link></Button>
          <Button ><Link to={'/My'}style={{color:'white',textDecoration:'none'}}>Myprofile</Link></Button>
          <Button style={{color:'white'}}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar