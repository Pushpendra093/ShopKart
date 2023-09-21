import { Divider, Grid ,useMediaQuery} from "@mui/material";

import { useTheme } from '@mui/material/styles';

export default function Fottor(){
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));



     return(<div style={{backgroundImage:`url(${'/assets/fottorPic.jpg'})`,height:500,position:'relative'}}>
         <Grid container spacing={1} style={{padding:'8%'}}>
            <Grid item lg={5} xs={12} style={{paddingTop:'3%',paddingLeft:'6%',display:sm?'flex':'',alignItems:sm?'center':'',flexDirection:'column'}}>
                <div style={{fontFamily:'syne',fontWeight:sm?'bolder':'',fontSize:sm?20:30,color:'grey'}}>
                 Newslleter
                </div>
                <div style={{fontFamily:'syne',fontSize:20,color:'grey',width:sm?'80%':'66%',textAlign:'center'}}>
                 Get news about articles and updates in your inbox
               </div>
            </Grid>
            <Grid item lg={7} xs={12} style={{color:'grey',fontFamily:'syne',fontSize:20,paddingTop:sm?'10%':'3%'}}>
                <div style={{paddingLeft:'1%',paddingTop:'2%'}}>NAME</div>
                <Divider style={{border:'1px solid grey',width:sm?'100%':'60%'}}/>
                <div style={{paddingLeft:'1%',paddingTop:'2%'}}>EMAIL</div>
                <Divider style={{border:'1px solid grey',width:sm?'100%':'60%'}}/>
                <div style={{paddingLeft:'1%',paddingTop:'2%'}}>MESSAGE</div>
                <Divider style={{border:'1px solid grey',width:sm?'100%':'60%'}}/>
            </Grid>
           
                   </Grid>
                   <div style={{fontFamily:'syne',position:'absolute',top:sm?'40%':'12%',fontSize:sm?90:230,color:'#fff',fontWeight:'bolder',position:'absolute',paddingLeft:'4%',transform: 'scaleY(0.5)',width:'90%'}}>GIT<br/> IN {sm?<br/>:<></>} TOUCH</div>
                   <div style={{border:'1px solid #e67e22',borderRadius:100,width:sm?100:150,height:sm?100:150,right:'15%',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',top:sm?'55%':'50%',color:'#e74c3c'}}>SEND</div>
    </div>)
}