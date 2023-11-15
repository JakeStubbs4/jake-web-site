import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import messages from 'assets/messages';
import { Stack, Divider } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import theme from 'assets/variables.module.scss';
import './index.scss';

const StyledDivider = styled(Divider)`
  background: ${theme.accentColour};
  width: 1px;
`;

function TitlePage() {
  const [pageTop, setPageTop] = useState(0)
  
  const autoScroll = () => {
    const headerSize = document.getElementById('header-transform').getBoundingClientRect().bottom - document.getElementById('header-transform').getBoundingClientRect().top;
    const contentTop = document.getElementById('down-arrow').getBoundingClientRect().bottom - headerSize - 15;
    scrollY(contentTop);
  }

  const handleScroll = () => {
    let top = window.pageYOffset;
    setPageTop(top);
  }

  function scrollY(pos = 0, behavior = "smooth") {
    if (window === "undefined") return;

    window.requestAnimationFrame(() => {
      window.scroll({ top: pos, left: 0, behavior });
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, [])

  return (
    <div className='title-page-box'>
      <div className="title-page-title">
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          divider={
              <StyledDivider 
                  variant="middle" 
                  orientation="vertical"
                  flexItem 
              />
          }
        >
          <div>{messages.fullName}</div>
          <div>{messages.title}</div>
        </Stack>
      </div>
      <div id="down-arrow">
        <a
          onClick={autoScroll}
        >
          {(pageTop < 15) && <Stack
            alignItems="center"
            justifyContent="flex-end"
            spacing={0}
          >
            learn more
            <ArrowDropDownOutlinedIcon />
          </Stack>}
        </a>
      </div>
    </div>
  );
}

export default TitlePage;
