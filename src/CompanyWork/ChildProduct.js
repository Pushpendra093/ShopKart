
import React ,{ useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import {Avatar, Divider, Paper} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useMediaQuery } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

export default function ChildProduct(props) {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const[open,setOpen]=useState(props.status)

  const handleClose=()=>{
    props.setStatus(false)
  }
  
  useEffect(function(){
    setOpen(props.status)
  },[props.status])



 
  const page=()=>{
  return(<div>
                
                  <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                   // onKeyDown={handleListKeyDown}
                   style={{background:'black',border:'1px solid #000',color:'#fff'}}
                  >
                   <MenuItem >Product 1</MenuItem>
                   <MenuItem >Product 2</MenuItem>
                   <MenuItem >Product 3</MenuItem>
                   <MenuItem >Product 4</MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>
                </div>
    
  )
  
  }

  return (
    <div >
      <Snackbar
        anchorOrigin={{  vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        style={{width:'11%',position:'absolute',marginTop:sm?'53px':'105px',marginRight:sm?'':'55%',marginLeft:sm?'82%':'',}}
      >
        <Paper variant='outlined' onClose={handleClose} style={{background:'#000'}} sx={{ width: sm?500:'100%' }}>
       {page()}
       </Paper>
       
      </Snackbar>
     
      </div>
  );
  
  
}

