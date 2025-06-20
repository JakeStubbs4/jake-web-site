import React from 'react';
import { Grid } from '@mui/material';
import './index.scss';

const Experience = ({experience}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <h2 className="reduce-whitespace-organization">{experience.organizationName} | {experience.location} [{experience.locationType}]</h2>
      </Grid>
      {experience.roles.map((role, roleIdx) => {
        return <Grid
          item
          container
          key={`${experience.organizationName}-${roleIdx}`}
          direction="column"
          className="role-container"
        >
          <Grid
            item
            container
            className="experience-title"
            direction="row"
          >
            <Grid item>
              <h3 
                className={`remove-whitespace-role ${!role.descriptionPoints || role.descriptionPoints?.length === 0 ? 'add-whitespace-between-roles' : ''}`}
              >
                {role.title}
              </h3>
            </Grid>
            <Grid 
              item 
              className="experience-timeline"
            >
              <h3 
                className={`remove-whitespace-role ${!role.descriptionPoints || role.descriptionPoints?.length === 0 ? 'add-whitespace-between-roles' : ''}`}
              >
                  {role.start} - {role.end}
              </h3>
            </Grid>
          </Grid>
          { role.descriptionPoints && role.descriptionPoints?.length !== 0 &&
            <Grid item>
              <ul className="reduce-top-margin-experience-list">
                {role.descriptionPoints?.map((bullet, bulletIdx) => {
                  return <li 
                            key={`${experience.organizationName}-${role.title}-${bulletIdx}`} 
                            className="space-between-experience-list-items"
                          >
                            {bullet}
                          </li>;
                })}
              </ul>
            </Grid>
          }
        </Grid>
      })}
    </Grid>
  )
}

export default Experience;