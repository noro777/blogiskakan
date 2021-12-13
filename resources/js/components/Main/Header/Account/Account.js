import React, { useRef, useEffect } from 'react';
import {Box, Grid, Typography,Select, MenuItem, Link} from '@mui/material';
import theme from '../../../../styles/theme';
import "./Account.scss";
import "./Account.responsive.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import ArmFlag from '../../../../photos/language-flags/am.jpg';
import BrFlag from '../../../../photos/language-flags/br.jpg';
import RusFlag from '../../../../photos/language-flags/rus.jpg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import $ from "jquery";

function Account({width, height}){

    return(
    <Grid
    container
    id="account_cont"
    width={`${width}%`}
    height={`${height}%`}
    sx={{ml:"auto"}}
   >
      {/* account container */}
      <Grid
       item
       id="account_container"
       width="25%"
       height="100%"
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
        <AccountCircleIcon 
         sx={{color:"white", cursor:"pointer"}} />
      </Grid>
       {/* dark-light mode container  */}
      <Grid
       item
       width="25%"
       height="100%"
       id="switch_container"
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
          <WbIncandescentIcon 
           sx={{color:"yellow",transform:"rotate(180deg)",cursor:"pointer"}} />
      </Grid>
      {/* languages select container */}
     <Grid
      item
      width="50%"
      height="100%"
      display="flex"
      sx={{alignItems:"center",justifyContent:"center"}}
      >
        <Select
         id="select"
         variant="filled"
        //  disableUnderline
         IconComponent={ () => (<ArrowDropDownIcon sx={{position:"absolute",left:"55%",color:"white"}} />)}
         defaultValue={"Armenian"}
         sx={{outline:"0px solid transparent",width:"100%",height:"100%",border:"0px solid transparent",borderColor:"transparent transparent rgba(0, 0, 0, 0.1) transparent", outline:"0px solid transparent",padding:"0",display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:"inherit"}}
         >
            <MenuItem
             value={"Armenian"}
             sx={{color:"white"}}
             >
             <img
              src={ArmFlag}
              alt="Armenian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              Հայ
            </MenuItem>
           <MenuItem
             value={"Russian"}
             sx={{color:"white"}}>
             <img
             src={BrFlag}
             alt="English"
             className="lang_icon"
             style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
             ></img>
             Eng
           </MenuItem>
           <MenuItem
            value="English"
            sx={{color:"white"}}>
             <img
              src={RusFlag}
              alt="Russian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              Ру
           </MenuItem>
        </Select>
      </Grid>
    </Grid>
    )
}

export default Account