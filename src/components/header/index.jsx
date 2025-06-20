import React, { useEffect } from "react";
import { Stack } from '@mui/material';
import messages from 'assets/messages';
import NavIcons from 'components/navicons';
import theme from 'assets/variables.module.scss';
import './index.scss';

function Header({ requiredWidth }) {
  
  const handleScroll = () => {
    if (!requiredWidth) return;
    let header = document.getElementById("header-transform");
    let bottom = header.offsetHeight;
    let opacity = (1 - ((bottom - window.scrollY)/bottom));
    header.style.color = `rgba(${theme.textColourRGB}, ${theme.textColourRGB}, ${theme.textColourRGB}, ${opacity})`;
    header.style.backgroundColor = `rgba(${theme.primaryColourR}, ${theme.primaryColourG}, ${theme.primaryColourB}, ${opacity})`;
    header.style.borderBottomColor = `rgba(${theme.accentColourR}, ${theme.accentColourG}, ${theme.accentColourB}, ${opacity})`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    handleScroll();
  })

  return (
    <div
      className="app-header" 
      id="header-transform"
    >
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="flex-start"
        className="app-title"
      >
        <h2>{messages.fullName} | {messages.title}</h2>
      </Stack>
      <NavIcons iconSize='large' />
    </div>
  );
}

export default Header;
