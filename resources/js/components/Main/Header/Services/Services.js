import React, { useEffect, useState ,useRef } from "react";
import './Services.responsive.scss';
import {Link, Box, List, ListItem, Typography} from '@mui/material';
import theme from "../../../../styles/theme";
import Web from   '../../../../photos/menu-logos/webD.png';
import Mobile from '../../../../photos/menu-logos/mobile.png';
import Computer from '../../../../photos/menu-logos/computer.png';
import Gaming from  '../../../../photos/menu-logos/gaming.png';
import Design from  '../../../../photos/menu-logos/design.png';
import SEO from  '../../../../photos/menu-logos/seo.png';
import Business from   '../../../../photos/menu-logos/business.png';
import Taxes from   '../../../../photos/menu-logos/taxes.png';
import Print from   '../../../../photos/menu-logos/print.png';
import Photo from   '../../../../photos/menu-logos/photo.png';
import Repair from   '../../../../photos/menu-logos/repair.png';
import Adver from   '../../../../photos/menu-logos/adver.png';
import Techn from   '../../../../photos/menu-logos/techn.png';
import Automation from   '../../../../photos/menu-logos/automation.png';
import Security from   '../../../../photos/menu-logos/security.png';
import Clarity from   '../../../../photos/menu-logos/clarity.png';
import Multimedia from   '../../../../photos/menu-logos/multimedia.png';
import Family from   '../../../../photos/menu-logos/family.png';
import Tort from '../../../../photos/menu-logos/tort.png';
import Birth from '../../../../photos/menu-logos/birth.png';
import Camping from '../../../../photos/menu-logos/camping.png';
import Bus from '../../../../photos/menu-logos/bus.png';
import $ from 'jquery';

function Services(  ){

   // refs 
   const servicesCont = useRef()

   //  states 
   const [fontSizing, setFontSizing] = useState("14px")
   const [widthState, setWidthState] = useState("85%")
   
  //  responsive changes and styles 
   useEffect(() => {
      // window.addEventListener("load",function(){
         var windowWidth = window.innerWidth
         if(windowWidth < 900 && windowWidth > 700){
            console.log('middle');
            setFontSizing("12px")
          }
          else if(windowWidth >= 900){
            setFontSizing("14px")
          }
         else if(windowWidth < 700){
             console.log('small');
            setFontSizing("11px")
          }
         if(windowWidth < 780){
            setWidthState("100%")
          }
         if(windowWidth < 500){
            console.log("very small");
            var servicesCont = $("#services_cont")
            var listsBox = $("#lists_box")
            var otherBox = $("#other_box")
            var otherLists = $("#other_lists_box")
            var list1 = $("#list_1")
            var list2 = $("#list_2")
            var list3 = $("#list_3")
            var list4 = $("#list_4")
            var list5 = $("#list_5")
            var list6 = $("#list_6")
            listsBox.css({"flex-direction":"column","height":"80%"})
            otherBox.css({"height":"20%"})
            otherLists.css({"flex-direction":"column"})
            list1.css({"width":"100%","height":"33%"})
            list2.css({"width":"100%","height":"33%"})
            list3.css({"width":"100%","height":"33%"})
            list4.css({"width":"100%","height":"60%"})
            list5.css({"width":"100%","height":"40%"})
            list6.css({"width":"100%","height":"0%"})
          }
        // })
      window.addEventListener("resize", function(){
         var windowWidth = window.innerWidth
         if(windowWidth < 900 && windowWidth > 700){
            console.log('middle');
            setFontSizing("12px")
          }
          else if(windowWidth >= 900){
            setFontSizing("14px")
          }
         else if(windowWidth < 700){
             console.log('small');
            setFontSizing("11px")
          }
         if(windowWidth < 780){
            setWidthState("100%")
          }
         if(windowWidth < 500){
            console.log("very small");
            var servicesCont = $("#services_cont")
            console.log(servicesCont);
            servicesCont.css({"left":"-20%"})
            var listsBox = $("#lists_box")
            var otherBox = $("#other_box")
            var otherLists = $("#other_lists_box")
            var list1 = $("#list_1")
            var list2 = $("#list_2")
            var list3 = $("#list_3")
            var list4 = $("#list_4")
            var list5 = $("#list_5")
            var list6 = $("#list_6")
            listsBox.css({"flex-direction":"column","height":"76%"})
            otherBox.css({"height":"23%"})
            otherLists.css({"flex-direction":"column"})
            list1.css({"width":"100%","height":"33%"})
            list2.css({"width":"100%","height":"33%"})
            list3.css({"width":"100%","height":"33%"})
            list4.css({"width":"100%","height":"60%"})
            list5.css({"width":"100%","height":"40%"})
            list6.css({"width":"100%","height":"0%"})
          }
      })
   }, [])
   
  //  appearing effect 
   useEffect(() => {
       servicesCont.current.style = "opacity:0.85"
   }, [])

    return(
        <Box
         ref={servicesCont}
         id="services_cont"
         width="600%"
         height="1400%"
         sx={{backgroundColor:theme.palette.background.dark,position:"absolute",top:"95%",borderRadius:"15px",opacity:"0",transition:"0.5s",zIndex:2,p:2}}>
            
            {/* three columns box */}
            <Box
             id="lists_box"
             height="60%"
             width="100%"
             display="flex"
             sx={{justifyContent:"space-between",mb:1}}>
               {/* list 1 */}
               <List
                  id="list_1"
                  sx={{width:"30%", height:"100%",margin:0,padding:0}}>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                      width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                          Վեբ Կայքերի Պատտրաստում
                      </Typography>
                      <img 
                        src={Web}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                  </Link>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(550%)"}}}>
                      <Typography
                      width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                         Մոբայլ հավելվածնդրի ստեղծում
                      </Typography>
                       <img 
                        src={Mobile}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                  </Link>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                      width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                          Համակարգչային Հավելվածների ստեղծում
                      </Typography>
                       <img 
                        src={Computer}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                 </Link>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                      width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                          Մոբայլ և Համակարգչային Խաղերի Ստեղծում
                      </Typography>
                       <img 
                        src={Gaming}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                  </Link>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                      width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                          Վեբ  և Գրաֆիկ Դիզայն
                      </Typography>
                       <img 
                        src={Design}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                  </Link>
                  <Link href="#">
                    <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                      variant="p"
                      sx={{fontSize:fontSizing}}
                      >
                          SEO և SMM Առաջխաղացում
                      </Typography>
                       <img 
                        src={SEO}
                        className="service_img"
                        alt="mobile"
                        ></img>
                    </ListItem>
                  </Link>
              </List>
               {/* list 2 */}
              <List
               id="list_2"
               sx={{width:"30%", height:"100%",margin:0,padding:0}}>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Բիզնես Կառավարում և Մարքեթինգ
                      </Typography>
                       <img 
                        src={Business}
                        className="service_img"
                        alt="business"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                        width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Հաշվապահական Հաշվառում և Հարկային Օրենսդրություն
                      </Typography>
                       <img 
                        src={Taxes}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Տպագրական Աշխատանքներ
                      </Typography>
                       <img 
                        src={Print}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                        Ֆոտո և Վիդեո Նկարահանումներ
                      </Typography>
                       <img 
                        src={Photo}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Համակարգչային Տեխնիկայի Վերանորոգում
                      </Typography>
                       <img 
                        src={Repair}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Գովազդ և Առաջխաղացում
                      </Typography>
                       <img 
                        src={Adver}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
              </List>
               {/* list 3 */}
              <List
               id="list_3"
               sx={{width:"30%", height:"100%",margin:0,padding:0}}>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Տեխնիկական և Ծրագրային Ապահովում
                      </Typography>
                       <img 
                        src={Techn}
                        className="service_img"
                        alt="business"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Ավտոմատացված Կառավարման Համակարգեր
                      </Typography>
                       <img 
                        src={Automation}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                        width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                         Ցանցային Անվտանգության Ծառայություններ
                      </Typography>
                       <img 
                        src={Security}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                        width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                        Դումեն և Հոստինգ
                      </Typography>
                       <img 
                        src={Clarity}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
                  <Link href="#">
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Վիդեո Մոնտաժ և Անիմացիա
                      </Typography>
                       <img 
                        src={Multimedia}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                  </Link>
              </List>
            </Box>
             {/* two columns box  */}
            <Box
             width="100%"
             height="40%"
             id="other_box"
             sx={{pt:2}}
            >
               <Typography 
                variant="h6"
                color="white"
                sx={{fontSize:"14px"}}
                >
                   Այլ Ծառայություններ
                </Typography>
                <Box
                 width="100%"
                 height="90%"
                 id="other_lists_box"
                 display="flex"
                 sx={{justifyContent:"space-between"}}>
                   {/* list 4 */}
                   <List
                     id="list_4"
                     sx={{width:"30%",height:"100%"}}
                    >
                      <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",fontSize:"12px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                       <Typography
                         width={widthState}
                        variant="p"
                        sx={{fontSize:fontSizing}}
                       >
                          Կնունքի Կազմակերպում
                       </Typography>
                       <img
                        src={Family}
                        className="service_img"
                        alt="mobile"
                        ></img>
                     </ListItem>
                     <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",fontSize:"12px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                        width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Հարսանիքի Կազմակերպում
                      </Typography>
                      <img 
                        src={Tort}
                        className="service_img"
                        alt="mobile"
                        ></img>
                     </ListItem>
                     <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",fontSize:"12px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                        width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Ծննդյան Տոների Կազմակերպում
                      </Typography>
                      <img 
                        src={Birth}
                        className="service_img"
                        alt="mobile"
                        ></img>
                     </ListItem>
                   </List>
                   {/* list 5 */}
                   <List
                     id="list_5"
                     sx={{width:"30%",height:"100%"}}
                    >
                     <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",fontSize:"12px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Արշավների Կազմակերպում
                      </Typography>
                      <img 
                        src={Camping}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                   <ListItem
                      sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,overflow:"hidden",height:"70px",fontSize:"12px",display:"flex",justifyContent:"space-between",position:"relative",color:theme.palette.underline.main,cursor:"pointer","&:hover":{color:"white",borderBottom:`2px solid white`},"&:hover img":{filter:"brightness(150%)"}}}>
                      <Typography
                       width={widthState}
                       variant="p"
                       sx={{fontSize:fontSizing}}
                      >
                          Էքսկուրսիաների Կազմակերպում
                      </Typography>
                      <img 
                        src={Bus}
                        className="service_img"
                        alt="mobile"
                        ></img>
                   </ListItem>
                   </List>
                   {/* list 6 */}
                   <List
                    id="list_6"
                    sx={{width:"30%",height:"100%"}}
                    > 
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Services