import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';



  
export default function AppBarMain(props) {

  const theme = useTheme();
  const navigate=useNavigate()
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
 
  const handleClick=()=>{
    props.setStatus(true)
  }

  const handleOpen=()=>{
    navigate('/menuoption')
  }
 
  

  return (
   <div style={{background:'#000',color:'#fff',position:'relative'}}>
    
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingBottom:2,paddingLeft:sm?'':'7%',paddingRight:sm?'':'7%',}}>
        <div style={{fontSize:40,fontWeight:'lighter'}}>ShopKart</div>
        {sm?
          <IconButton onClick={handleOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
         </IconButton>
        :
        <div style={{display:'flex',alignItems:'center',textShadow:'2px 1px 2px #fff'}}>WISHLIST (0) BAG(0)</div>
       
        }
          </div>
         
      
 
   <Divider variant='fullWidth' style={{borderTop:'2px solid',width:sm?'100%':'90%',marginLeft:sm?'':'5%'}} />
   
  {sm?<></>: <div style={{width:'20%',background:'#fff',height:'auto',position:'absolute',top:'41%',left:'30%',clipPath:'polygon(0 50%, 43% 43%, 50% 3%, 58% 43%, 99% 50%, 57% 57%, 50% 100%, 43% 57%)',height:30,width:30}}></div>
}
       {sm?
     <></>
       :
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'60%',textShadow:'2px 1px 2px #fff',fontSize:18,padding:10}}>
          <div>Home</div>
          <div>ABOUT</div>
          <div onClick={handleClick}>OUR PRODUCTS</div>
          <div>CONTACT US</div>
        </div>}
        
   </div>
  );
}

