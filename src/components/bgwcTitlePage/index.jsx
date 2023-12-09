import React from 'react';
import styled from 'styled-components';
import messages from 'assets/bgwc-messages';
import { Stack, Divider } from '@mui/material';
import theme from 'assets/variables.module.scss';
import './index.scss';

const StyledDivider = styled(Divider)`
  background: ${theme.accentColour};
  width: 1px;
`;

function BGWCTitlePage() {

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
    </div>
  );
}

export default BGWCTitlePage;
