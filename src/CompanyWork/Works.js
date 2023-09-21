import React,{createRef} from "react";
import { Avatar, Divider, Paper,useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTheme } from '@mui/material/styles';
import { useNavigate} from "react-router-dom";

export default function Works(){

  const theme = useTheme();
  const navigate=useNavigate()
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  var sliderRef=createRef()
  var color=['#55efc4','#81ecec','#ffeaa7','#dfe6e9','#fd79a8','#f7f1e3','#ccae62','#786fa6']
  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: sm?1:md?4:lg?5:6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows:false
    };
    
    const [productsData,setProductsData]=useState([])

   
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products').then((result)=>{
        result.json().then((resp)=>{
          //  console.log(resp)
           setProductsData(resp)
        })
      })
    },[])

   // console.log(
     // productsData.filter(productsData=>productsData.category=="men's clothing")
    //)

    const handleBackClick=()=>{
      sliderRef.current.slickPrev()
  }

  const handleForwardClick=()=>{
      sliderRef.current.slickNext()
  }


    const products=()=>{
        return productsData.map((item)=>{
            return(<div >
            <Paper elevation={0} style={{width:sm?350:200,height:'auto',margin:sm?'5%':''}} >
              <div style={{}}><Avatar variant='square' src={`${item.image}`} style={{width:sm?350:200,height:sm?350:200}} /></div>
              <div style={{fontFamily:'syne',fontSize:sm?25:20,padding:2}}>{item.category}</div>
              <div style={{fontSize:sm?10:8,}}>{item.description}</div>
              <div style={{paddingTop:sm?'3%':''}}>$ {item.price}</div>
            </Paper></div>)
        })
    }



  return(<div style={{position:'relative'}}>

    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={{fontFamily:'syne',fontSize:sm?40:65,fontWeight:500,paddingLeft:'2%',width:sm?'100%':'70%'}}>
      New products
    </div>

    {sm?<></>:

    <div style={{padding:5,display:'flex',justifyContent:'space-between',alignItems:'center',width:'20%'}}>
    <div onClick={handleBackClick} style={{color:'',background:'#000',width:100,clipPath: 'polygon(20% 0, 20% 47%, 100% 47%, 100% 53%, 20% 53%, 20% 100%, 0% 50%)',height:13,marginRight:'1%'}}>.</div>
    <div onClick={handleForwardClick} style={{color:'',background:'#000',width:100,clipPath: 'polygon(0 47%, 80% 47%, 80% 0, 100% 50%, 80% 100%, 80% 53%, 0 53%)',height:13}}>.</div>
     </div>
}
    </div>

    

    <div style={{width:'20%',background:'#000',height:'auto',position:'absolute',top:sm?'5.5%':'16.2%',left:'1%',clipPath:'polygon(0 50%, 45% 45%, 50% 3%, 53% 45%, 99% 50%, 54% 55%, 50% 100%, 45% 55%)',height:sm?25:20,width:sm?25:20}}></div>
    <Divider style={{borderTop:'1px solid #000',width:sm?'100%':'29%',top:sm?'':'18%',position:'absolute',left:'2%'}}/>
       
    <div style={{marginTop:sm?'3%':'3%'}}>
    <Slider {...settings} ref={sliderRef}>
        {products()}
     </Slider>
     </div>

     {sm?

    <div style={{padding:5,display:'flex',justifyContent:'center',alignItems:'center',width:sm?'100%':'20%'}}>
    <div onClick={handleBackClick} style={{color:'',background:'#000',width:100,clipPath: 'polygon(20% 0, 20% 47%, 100% 47%, 100% 53%, 20% 53%, 20% 100%, 0% 50%)',height:13,marginRight:'1%'}}>.</div>
    <div onClick={handleForwardClick} style={{color:'',background:'#000',width:100,clipPath: 'polygon(0 47%, 80% 47%, 80% 0, 100% 50%, 80% 100%, 80% 53%, 0 53%)',height:13}}>.</div>
     </div>
     :<></>
}
  </div>)
}