import React from 'react';
import { Stack } from '@mui/material';
import './index.scss';

const Experience = ({experience}) => {
  return (
    <Stack spacing={0}>
      <Stack 
        className="experience-title" 
        spacing={1}
        direction="row"
      >
        <h3>{experience.title} | {experience.organization}</h3>
        <h3 className="experience-timeline">{experience.start} - {experience.end}</h3>
      </Stack>
      <ul className="experience-list">
        {experience.descriptionPoints.map(bullet => {
          return <li>{bullet}</li>
        })}
      </ul>
    </Stack>
  )
}

export default Experience;