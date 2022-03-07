import React from 'react';
import { Stack } from '@mui/material';
import './index.scss';

const Education = ({experience}) => {
  return (
    <Stack spacing={0}>
      <Stack
        className="education-title" 
        spacing={1}
        direction="row"
      >
        <h3>{experience.title} | {experience.institution}</h3>
        <h3 className="education-timeline">{experience.start} - {experience.end}</h3>
      </Stack>
      <Stack
        className="education-specialization"
        direction="row"
        spacing={1}
      >
        <h4>Specialization:</h4>
        <h4 className="specialization-content">{experience.specialization}</h4>
      </Stack>
    </Stack>
  )
}

export default Education;