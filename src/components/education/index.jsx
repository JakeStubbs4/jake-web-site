import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { EDUCATION_TYPES_ENUM } from 'assets/messages';
import './index.scss';

const ContentContainer = styled(Grid)`
  margin-top: -4vh;
`

const educationTypesMap = {
  [EDUCATION_TYPES_ENUM.DEGREE]: (experience) => <Degree experience={experience} />,
  [EDUCATION_TYPES_ENUM.CERTIFICATION]: (experience) => <Certification experience={experience} />,
};

const Degree = ({experience}) => {
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

const Certification = ({experience}) => {
  return (
    <Grid container direction="column">
      <Grid
        container
        item
        className="education-title" 
        direction="row"
      >
        <Grid item>
          <h3>{experience.title}</h3>
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
          <h4>Verified Credential ID:</h4>
        </Grid>
        <Grid item>
          <h4><a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.credentialId}</a></h4>
        </Grid>
      </ContentContainer>
      <ContentContainer
        container
        item
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <Grid item>
          <h4>Issued:</h4>
        </Grid>
        <Grid item>
          <h4 className="specialization-content">{experience.issued}</h4>
        </Grid>
        <Grid item>
          <h4>| Expires:</h4>
        </Grid>
        <Grid item>
          <h4 className="specialization-content">{experience.expires}</h4>
        </Grid>
      </ContentContainer>
    </Grid>
  )
}

const Education = ({experience}) => {
  return educationTypesMap[experience.type](experience);
}

export default Education;