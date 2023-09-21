import AppBar from "./AppBar";
import AppBarMain from "./AppBarMain";
import Banner from "./Bannar";
import Works from "./Works"
import Fottor from "./Fottor";
import ChildProduct from "./ChildProduct";
import { useState } from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';



export default function UserHome(){
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    
    const [status,setStatus]=useState(false)

    return(<div>
         <div style={{paddingLeft:sm?'':'7%',paddingRight:sm?'':'7%',background:'#1e272e'}} ><AppBar/></div>
         <div style={{background:'#000',padding:sm?'3%':''}}><AppBarMain setStatus={setStatus}/></div>
         <ChildProduct status={status} setStatus={setStatus} />
         <div style={{width:'100%'}}><Banner/></div>
         <div style={{marginTop:sm?'7%':'3%',marginBottom:sm?'10%':'2%'}}><Works /></div>
         <div><Fottor/></div>
         <div style={{background:'black',textAlign:'center',fontSize:sm?10:17,padding:'1%',color:'#fff'}}>Copyright 2022 All Rights Reserved By SG</div>

        </div>)
}

