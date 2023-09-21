import { Avatar } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function AppBar(){
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));


    return(<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#1e272e'}} >
        <div style={{display:'flex',flexDirection:'row'}}>
         <div style={{display:'flex',alignItems:'center'}}><Avatar variant='square' src={`/assets/favicon.ico`} style={{color:'#000',width:25,height:25,paddingRight:8,padding:6}} /></div>
         <div style={{color:'grey',display:'flex',alignItems:'center',fontFamily:'syne',fontSize:sm?11:13}}>Free Delivery | Return Policy</div>
        </div>
        <div style={{display:'flex',alignItems:'center',flexDirection:'row',color:'grey',fontFamily:'syns',fontSize:sm?11:13}}>
            <div style={{paddingRight:20}}>Login</div>
            {sm?<></>:
              <div style={{paddingRight:sm?'':20}}>Follow Us</div>
            }
          
                        <span style={{paddingRight:17,width:10,height:10,display:'flex',alignItems:'center'}}><InstagramIcon /></span>
                        <span style={{marginRight:17,width:10,height:10,display:'flex',alignItems:'center'}}><TwitterIcon /></span>
                        <span style={{marginRight:17,width:10,height:10,display:'flex',alignItems:'center'}}><FacebookIcon /></span>
                        <span style={{marginRight:17,width:10,height:10,display:'flex',alignItems:'center'}}><LinkedInIcon /></span>
        </div>
    </div>)
}