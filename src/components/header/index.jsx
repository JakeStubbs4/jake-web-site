import { useEffect } from "react";
import Stack from '@mui/material/Stack';
import messages from 'assets/messages';
import NavIcons from 'components/navicons';
import * as theme from 'assets/variables.module.scss';
import './index.scss';

function Header() {
  
  const handleScroll = () => {
    let header = document.getElementById("header-transform");
    let bottom = header.offsetHeight;
    let opacity = (1 - ((bottom - window.pageYOffset)/bottom));
    header.style.color = `rgba(${theme.textColourRGB}, ${theme.textColourRGB}, ${theme.textColourRGB}, ${opacity})`;
    header.style.backgroundColor = `rgba(${theme.primaryColourR}, ${theme.primaryColourG}, ${theme.primaryColourB}, ${opacity})`;
    header.style.borderBottomColor = `rgba(${theme.accentColourR}, ${theme.accentColourG}, ${theme.accentColourB}, ${opacity})`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, [])

  return (
    <div 
      className="app-header" 
      id="header-transform"
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="baseline"
        justifyContent="flex-start"
      >
        <h2 className="app-title">{messages.fullName}</h2>
        <h1 style={{fontSize:"40px"}} > | </h1>
        <h2 className="app-title">{messages.title}</h2>
      </Stack>
      <NavIcons iconSize="large" />
    </div>
  );
}

export default Header;
