import React from "react";
import styled from 'styled-components';
import { Grid } from "@mui/material";

const HeaderContainer = styled(Grid)`
  margin-top: 2vh;
`

function ContentHeader({icon, header}) {
    return (
      <HeaderContainer item container alignItems="center" direction="row" spacing={2}>
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <h2>{header}</h2>
        </Grid>
      </HeaderContainer>
    )
}

export default ContentHeader;