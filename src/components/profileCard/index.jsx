import React from 'react';
import messages from 'assets/messages';
import { Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import SkillBar from 'components/skillBar';
import Experience from 'components/experience';
import Education from 'components/education';
import './index.scss';

function ProfileCard() {

  const groupSkills = (skillsArray) => {
    const skillStacks = [];
    while (skillsArray.length > 0) {
      skillStacks.push(skillsArray.splice(0, 5))
    }
    return skillStacks.map((stack) => {
      return <Stack direction="row" spacing={10}>{stack}</Stack>;
    })
  }

  return (
    <div className="profile-card">
      <Stack direction="row" spacing={2}>
        <img alt="Profile" className="image-container" src="/avatar.jpeg" height="325" />
        <Stack spacing={0}>
          <Stack className="content-row-header" direction="row" spacing={2}>
            <PersonIcon />
            <h2>About Me</h2>
          </Stack>
          <p>{messages.aboutMe}</p>
          <Stack className="content-row-header" direction="row" spacing={2}>
            <AssignmentIcon />
            <h2>Skills</h2>
          </Stack>
          {groupSkills(messages.skills.map(skill => {
            return (
              <React.Fragment key={skill}>
                <SkillBar title={skill.title} rating={skill.rating} />
              </React.Fragment>
            )
          }))}
          <Stack className="content-row-header" style={{marginTop:'6vh'}} direction="row" spacing={2}>
            <WorkIcon />
            <h2>Experience</h2>
          </Stack>
          {messages.experiences.map(experience => {
            return <Experience experience={experience} />
          })}
          <Stack className="content-row-header" direction="row" spacing={2}>
            <WorkIcon />
            <h2>Education</h2>
          </Stack>
          {messages.education.map(experience => {
            return <Education experience={experience} />
          })}
        </Stack>
      </Stack>
    </div>
  );
}

export default ProfileCard;
