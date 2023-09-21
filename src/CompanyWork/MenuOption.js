import { Divider } from "@mui/material";
import AppBar from "./AppBar";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function MenuOption(){
    const navigate=useNavigate()
    const [options,setOptions]=useState(0)

    const moreOptions=()=>{
        if(options!==0)
        {
            setOptions(0)
        }
        else
        {
            setOptions(1)
        }
    }

    const handleHome=()=>{
        navigate('/userhome')
    }

    return(<div>
        <div><AppBar/></div>
        <div style={{background:'black',height:'100vh',width:'100%'}}>
          
        <div style={{fontSize:38,fontFamily:'syne',color:'grey',display:'flex',justifyContent:'space-between',paddingLeft:'6%',paddingRight:'6%',paddingTop:'6%'}}>
          <div style={{}}>
            {"ShopKart"}
            </div>
            
            <div onClick={handleHome}  style={{cursor:'pointer'}}>
            <CloseIcon/>
            </div>
          </div>

          <Divider style={{width:'90%',marginLeft:'5%',borderTop:'1px solid #fff'}}/>
          
          
          <div style={{display:'flex',flexDirection:'column',textAlign:'center',textShadow:'2px 1px 2px #fff',fontSize:18,padding:10,color:'#fff'}}>
          <div style={{padding:'10%'}}>Home</div>
          <div style={{padding:'10%'}}>ABOUT</div>
          <div onClick={moreOptions} style={{padding:'10%'}}>OUR PRODUCTS</div>
          {options!==0?<div >
            <div style={{padding:'3%'}}>PRODUCT 1</div>
            <div style={{padding:'3%'}}>PRODUCT 2</div>
            <div style={{padding:'3%'}}>PRODUCT 3</div>
            <div style={{padding:'3%'}}>PRODUCT 4</div>
          </div>:<></>}
          <div style={{padding:'10%'}}>CONTACT US</div>
        </div>

        </div>
    </div>)
}