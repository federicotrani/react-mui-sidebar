import React, { useState } from 'react'
import { Sidebar } from "../components/Sidebar";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { MenuItem } from "../components/MenuItem";
import { Submenu } from '../components/Submenu';
import Header from '../components/Header';
import logo from "../assets/logo.png";

import CalendarIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TimelineIcon from '@mui/icons-material/Timeline';
import SimplePage from '../components/SimplePage';

function MainPage() {
    
    const[collapsed, setCollapsed] = useState(false); 

    return (
      <div style={{display: 'flex' }}>
        
        <Sidebar width={"270px"} isCollapse={collapsed} showProfile={false}>
          <Logo img={logo}>
            AdminMart
          </Logo>
          <Menu subHeading="MAIN MENU">
            {/* <MenuItem link="/" badge="true" icon={<HomeIcon />}>
              Modern
            </MenuItem> */}
            <MenuItem icon={<HomeIcon />} link="/">Home</MenuItem>
            <MenuItem icon={<CardTravelIcon />}>eCommerce</MenuItem>
            <MenuItem icon={<EqualizerIcon />}>Analytical</MenuItem>
          </Menu>
          <Menu subHeading="APPS">
            <MenuItem icon={<HeadsetMicIcon/>}>Chat</MenuItem>
            <MenuItem icon={<CalendarIcon/>}>Calendar</MenuItem>
          </Menu>
          <Menu subHeading="OTHERS">
            <Submenu title="Menu Level" icon={<WidgetsIcon/>}>
              <MenuItem>Post</MenuItem>
              <MenuItem>Details</MenuItem>
              <Submenu title="Level 2">
                <MenuItem>new</MenuItem>
                <MenuItem>Hello</MenuItem>
              </Submenu>
            </Submenu>
  
            <MenuItem icon={<CardGiftcardIcon/>}>Chip</MenuItem>
            <MenuItem target="_blank" link="google.com" icon={<InsertLinkIcon />}>
              External Link
            </MenuItem>
          </Menu>
        </Sidebar>
        <main style={{flexGrow: 1}}>
          <Header setCollapsed={setCollapsed} />
          
          <SimplePage />
  
        </main>
      </div>
    )
}

export default MainPage