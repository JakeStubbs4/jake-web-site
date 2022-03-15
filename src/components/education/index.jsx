import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import './index.scss';

const ContentContainer = styled(Grid)`
  margin-top: -4vh;
`

const Education = ({experience}) => {
  return (
    <Grid container direction="column">
      <Grid
        container
        item
        className="education-title" 
        direction="row"
      >
        <Grid item>
          <h3>{experience.title} | {experience.institution}</h3>
        </Grid>
        <Grid item className="education-timeline">
          <h3>{experience.start} - {experience.end}</h3>
        </Grid>
      </Grid>
      <ContentContainer
        container
        item
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <Grid item>
          <h4>Specialization:</h4>
        </Grid>
        <Grid item>
          <h4 className="specialization-content">{experience.specialization}</h4>
        </Grid>
      </ContentContainer>
    </Grid>
  )
}

export default Education;