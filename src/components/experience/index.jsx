import React from 'react';
import { Grid } from '@mui/material';
import './index.scss';

const Experience = ({experience}) => {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid 
        item
        container
        className="experience-title"
        spacing={1}
        direction="row"
      >
        <Grid item>
          <h3>{experience.title} | {experience.organization}</h3>
        </Grid>
        <Grid item className="experience-timeline">
          <h3>{experience.start} - {experience.end}</h3>
        </Grid>
      </Grid>
      <Grid item>
        <ul className="experience-list">
          {experience.descriptionPoints.map(bullet => {
            return <li>{bullet}</li>
          })}
        </ul>
      </Grid>
    </Grid>
  )
}

export default Experience;