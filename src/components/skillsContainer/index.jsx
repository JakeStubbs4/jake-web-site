import React from 'react';
import { Grid } from '@mui/material';
import SkillBar from 'components/skillBar';

function SkillsContainer({ skills }) {
    return (
      <Grid container columnSpacing={4}>
        {skills.map(skill => {
          return (
            <Grid item key={skill}>
              <SkillBar title={skill.title} rating={skill.rating} />
            </Grid>
          )
        })}
      </Grid>
    )
}

export default SkillsContainer;