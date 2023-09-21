import { Avatar, Divider } from "@mui/material";

import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function Banner(){
  
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

   

    return(<div style={{width:'100%',background:'#000',display:'flex',flexDirection:'row',position:'relative',paddingTop:'1%'}} >
        
        
        <div style={{width:sm?'20%':'60%'}}>
        <Divider style={{borderTop:'2px solid #fff',width:'60%',bottom:'15%',position:'absolute'}}/>
        </div>


        <div style={{width:sm?'80%':'40%'}}> <img variant='square' src={`/assets/modal.jpg`} style={{width:sm?'100%':'70%',height:'auto'}} /> </div>
         
         
         <div style={{width:sm?'100%':'70%',height:sm?250:370,position:'absolute',left:sm?'':'30%',top:'30%',color:'#fff',background:'orange',opacity:0.6}}> </div>
      
         <div style={{position:'absolute', transform: 'scaleY(0.5)',left:sm?'19%':'30%',top:sm?'55%':'30%',fontFamily:'syne',fontSize:sm?80:205,WebkitTextStroke:'1px #fff',color:'transparent'}}>2022 </div>
         <div style={{position:'absolute', transform: 'scaleY(0.5)',fontWeight:'bolder',left:sm?'10%':'20%',top:sm?'45%':'9%',fontFamily:'syne',fontSize:sm?70:200,color:'#fff'}}>Fresh </div>
         <div style={{position:'absolute', transform: 'scaleY(0.5)',fontWeight:'bolder',left:sm?'5%':'15%',top:sm?'66%':'52%',fontFamily:'syne',fontSize:sm?76:200,color:'#fff'}}>Look </div>
         
         {sm?<></>:
         <div style={{position:'absolute',right:'6%',bottom:'12%',fontFamily:'syne',fontSize:13,color:'#000'}}>OREGON JACKET <br/>$124 </div>
         }
         <div style={{border:'1px solid #fff',position:'absolute',left:'10%',bottom:'3%',color:'#fff',}}>See more </div>
      

        <div style={{width:'20%',background:'#fff',height:'auto',position:'absolute',bottom:sm?'12%':'11%',right:'37.5%',clipPath:'polygon(0 50%, 45% 45%, 50% 3%, 53% 45%, 99% 50%, 54% 55%, 50% 100%, 45% 55%)',height:sm?30:50,width:sm?30:50}}></div>
       
    
    </div>)
}